import React, { useEffect } from 'react';

import '../styles/profanityPage.css';

import { motion } from 'framer-motion';

import { DataGrid } from '@mui/x-data-grid';

import axios from 'axios';

import { Box, LinearProgress, Typography } from '@mui/material';
import { parse } from 'csv-parse/browser/esm';

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant='determinate' {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant='body2' color='text.secondary'>{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const columns = [
  { field: 'severity_rating', headerName: 'Rating', flex: 1 },
  { field: 'severity_description', headerName: 'Severity', flex: 1 },
  { field: 'canonical_form', headerName: 'Connotation', flex: 1 },
  { field: 'text', headerName: 'Text', flex: 1 },
  { field: 'category', headerName: 'Category 1', flex: 1 },
  { field: 'categoryTwo', headerName: 'Category 2', flex: 1, hide: true },
  { field: 'categoryThree', headerName: 'Category 3', flex: 1, hide: true },
];

let count = 0;

const ProfanitySet = () => {
  const [rows, setRows] = React.useState([]);
  const [progress, setProgress] = React.useState(0);

  /* function cleanData(data) {
    const newData = [];
    let i = 0;
    // loop through data and clean it up
    while (i < data.length) {
      const row = data[i];
      const newRow = {
        severity_rating: row.severity_rating,
        severity_description: row.severity_description,
        text: row.text,
        canonical_form: row.canonical_form,
        category: row.category,
      };
      newData.push(newRow);
      i++;
    }
  } */

  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/surge-ai/profanity/main/profanity_en.csv'
      )
      .then((res) => {
        parse(res.data, (err, output) => {
          if (err) {
            return;
          }
          if (!output) {
            return;
          }

          const outOf = output.length;

          function addRow(e, i) {
            setTimeout(() => {
              if (!isNaN(e[7])) {
                const canonicalForm = [e[1], e[2], e[3]].join(' ').trim();

                const newRow = {
                  id: count++,
                  severity_rating: e[7] || '',
                  severity_description: e[8] || '',
                  text: e[0] || '',
                  canonical_form: canonicalForm || '',
                  category: e[4] || '',
                  cetegoryTwo: e[5] || '',
                  categoryThree: e[6] || '',
                };
                setProgress(Math.round((count / outOf) * 100));

                setRows((prevRows) => [...prevRows, newRow]);
              }
            }, i);
          }

          count = 0;
          setRows([]);
          setProgress(0);
          for (let i = 0; i < output.length; i++) {
            const e = output[i];
            addRow(e, i);
          }
        });
      });

    return () => {
      setRows([]);
      setProgress(0);
    };
  }, []);

  return (
    <motion.div
      className='page'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <motion.div
        className='profanity-content'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.5,
        }}
        style={{}}
      >
        <a
          href='https://github.com/surge-ai/profanity'
          target={'_blank'}
          rel='noreferrer noopener'
        >
          Dataset Link (Powered by: Surge-ai)
        </a>
        <motion.div
          style={{
            width: '100%',
          }}
          animate={{
            opacity: progress !== 100 ? 1 : 0,
          }}
        >
          <LinearProgressWithLabel value={progress} />
        </motion.div>
        <DataGrid
          rows={rows}
          columns={columns}
          autoHeight
          density='compact'
          pageSizeOptions={[10, 20, 50, 100]}
          style={{
            width: '100%',
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ProfanitySet;
