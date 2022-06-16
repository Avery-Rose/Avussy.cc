import React from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import PropTypes from 'prop-types';

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const TabProvider = ({ tabs }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box
        sx={{
          borderColor: 'divider',
          maxWidth: { xs: '100%' },
        }}
      >
        <Tabs
          centered
          scrollButtons='auto'
          variant='scrollable'
          value={value}
          onChange={handleChange}
          aria-label='tabs-scripts'
        >
          {tabs?.map((tab, index) => (
            <Tab
              wrapped
              key={'Tab-' + index}
              label={tab.label}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
      {tabs?.map((tab, index) => {
        return (
          <TabPanel value={value} index={index} key={'Tab-Panel' + index}>
            {tab.content}
          </TabPanel>
        );
      })}
    </Box>
  );
};

export default TabProvider;
