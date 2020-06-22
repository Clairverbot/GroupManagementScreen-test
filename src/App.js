import React from 'react';
import { Container, Typography, Tabs, Tab, Grid, TextField, Icon, Chip, Button } from '@material-ui/core';
import DataTable from 'react-data-table-component';

// import { makeStyles } from '@material-ui/core/styles';


//for tabs
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

//member table
const data = [
  {
    id: 1,
    //0-registered, 1-project team, 2-learn track, 3-drop out, 4-banned, 5-graduated
    status: 0,
    firstName: 'Mark',
    country: 'Malaysia',
    city: 'Kuala Lumpur',
    timezone: 'GMT +8',
    projectInterest: ['AI/ML', 'Full stack webapp'],
    //color code: beginner-bronze, intermediate-silver, advanced-gold
    skills: [
      { language: 'JavaScript', level: 0 },
      { language: 'Python', level: 1 },
    ],
    communicationPreference: 'Daily',
    track:'Project',
    commitmentLevel: 'Full Time',
    contact: 'todo: icons'
  },
  {
    id: 2,
    //0-registered, 1-project team, 2-learn track, 3-drop out, 4-banned, 5-graduated
    status: 1,
    firstName: 'Luke',
    country: 'UK',
    city: 'London',
    timezone: 'GMT +1',
    projectInterest: ['Backend', 'Devops'],
    //color code: beginner-bronze, intermediate-silver, advanced-gold
    skills: [
      { language: 'JavaScript', level: 2 },
      { language: 'C++', level: 1 },
    ],
    communicationPreference: 'Weekly',
    commitmentLevel: 'Volunteer',
    track:'Project',
    contact: 'todo: icons'
  },
  {
    id: 3,
    //0-registered, 1-project team, 2-learn track, 3-drop out, 4-banned, 5-graduated
    status: 1,
    firstName: 'Cindy',
    country: 'India',
    city: 'Mumbai',
    timezone: 'GMT +5:30',
    projectInterest: ['Backend', 'Devops'],
    //color code: beginner-bronze, intermediate-silver, advanced-gold
    skills: [
      { language: 'JavaScript', level: 2 },
      { language: 'C++', level: 1 },
      { language: 'Python', level: 1 },
    ],
    communicationPreference: 'Weekly',
    commitmentLevel: 'Part Time',
    track:'Learn',
    contact: 'todo: icons'
  },
  {
    id: 4,
    //0-registered, 1-project team, 2-learn track, 3-drop out, 4-banned, 5-graduated
    status: 3,
    firstName: 'Brenda',
    country: 'Germany',
    city: 'Berlin',
    timezone: 'GMT +2',
    projectInterest: ['Bot', 'IoT'],
    //color code: beginner-bronze, intermediate-silver, advanced-gold
    skills: [
      { language: 'JavaScript', level: 3 },
      { language: 'C++', level: 3 },
    ],
    communicationPreference: 'Daily',
    commitmentLevel: 'Full Time',
    track:'Project',
    contact: 'todo: icons'
  },

  {
    id: 5,
    //0-registered, 1-project team, 2-learn track, 3-drop out, 4-banned, 5-graduated
    status: 4,
    firstName: 'xxx',
    country: 'Germany',
    city: 'Berlin',
    timezone: 'GMT +2',
    projectInterest: ['Bot', 'IoT'],
    //color code: beginner-bronze, intermediate-silver, advanced-gold
    skills: [
      { language: 'JavaScript', level: 3 },
      { language: 'C++', level: 3 },
    ],
    communicationPreference: 'Daily',
    commitmentLevel: 'Full Time',
    track:'Learn',
    contact: 'todo: icons'
  },
  {
    id: 6,
    //0-registered, 1-project team, 2-learn track, 3-drop out, 4-banned, 5-graduated
    status: 5,
    firstName: 'Lee',
    country: 'China',
    city: 'Shanghai',
    timezone: 'GMT +8',
    projectInterest: ['Backend', 'Devops'],
    //color code: beginner-bronze, intermediate-silver, advanced-gold
    skills: [
      { language: 'JavaScript', level: 3 },
      { language: 'C', level: 3 },
      { language: 'Python', level: 3 },
    ],
    communicationPreference: 'Daily',
    commitmentLevel: 'Full Time',
    track:'Project',
    contact: 'todo: icons'
  }
];
const columns = [
  {
    name: 'Status',
    selector: 'status',
    sortable: true,
    cell: row => {
      switch (row.status) {
        case 5:
          return <div><Chip size="small" label="Graduated" color="primary" /></div>
        case 4:
          return <div><Chip size="small" label="Banned" /></div>
        case 3:
          return <div><Chip size="small" label="Dropout" /></div>
        case 2:
          return <div><Chip size="small" label="Learner" color="primary" /></div>
        case 1:
          return <div><Chip size="small" label="Project" color="primary" /></div>
        default: //default is registered - 0
          return <div><Chip size="small" label="New" color="secondary" /></div>
      }
    }
  },
  {
    name: 'First Name',
    selector: 'firstName',
    sortable: true,
  },
  // {
  //   name: 'Country',
  //   selector: 'country',
  //   sortable: true,
  // },
  // {
  //   name: 'City',
  //   selector: 'city',
  //   sortable: true,
  // },
  {
    name: 'Start Date',
    selector: 'startDate',
    sortable: true,
    cell:row=><div>20 May 2020</div>
  },
  {
    name: 'Timezone',
    selector: 'timezone',
    sortable: true,
  },
  {
    name: 'Languages',
    wrap: true,
    cell: row => <div style={{ marginTop: 6 }}>{row.skills.map((item, i) => {
      return <Chip index={i} label={item.language} size="small" style={{ marginBottom: 3, backgroundColor: item.level === 2 ? 'gold' : item.level === 1 ? 'silver' : '#D2A869' }} />
    })}</div>
  },
  {
    name: 'Education Level',
    selector: 'educationLevel',
    sortable: true,
    cell:row=><div>University</div>
  },
  {
    name: 'Time Commitment',
    selector: 'commitmentLevel',
    sortable: true,
  },
  {
    name: 'Preferences',
    selector: 'preferences',
    sortable: true,
    wrap: true,
    width: '20em',

    cell:row=><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
  },

  {
    name: 'Project Interest',
    wrap: true,
    width: '12em',
    cell: row => <div style={{ marginTop: 6 }}>{row.projectInterest.map((item, i) => {
      return <Chip index={i} label={item} size="small" style={{ marginBottom: 3, marginRight: 3 }} color='primary' />
    })}</div>
  },
  // {
  //   name: 'Communication Preference',
  //   selector: 'communicationPreference',
  //   sortable: true,
  // },
  // {
  //   width: '2em',
  //   center: true,
  //   cell: row => <Icon fontSize="small">mail</Icon>
  // },
  // {
  //   width: '2em',
  //   center: true,
  //   cell: row => <Icon className="fa fa-linkedin" fontSize="small" />
  // },

  // {
  //   width: '2em',
  //   center: true,
  //   cell: row => <Icon className="fab fa-discord" fontSize="small" />
  // },
  // {
  //   width: '2em',
  //   center: true,
  //   cell: row => <Icon fontSize="small">phone</Icon>
  // },
  {
    width: '3em',
    center: true,
    cell: row => <Icon fontSize="small" color='disabled'>more_vert</Icon>
  },
];
function App() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        <br />
        Group Management
      </Typography>
      <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" >
        <Tab label="Members" {...a11yProps(0)} />
        <Tab label="Project Teams" {...a11yProps(1)} />
        {/* <Tab label="Learner Pods" {...a11yProps(2)} /> */}
      </Tabs>
      <div
        role="tabpanel"
        hidden={value !== 0}
        id={`simple-tabpanel-0`}
        aria-labelledby={`simple-tab-0`}
      >
        {value === 0 && (
          <div>
            <br />
            <Grid container alignItems='center'>
              <Grid item xs={3} justify='flex-end'>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Search"
                  size='small'
                // value={values.amount}
                // onChange={handleChange('amount')}
                />
              </Grid>
              <Grid item xs={1}>
                <Icon className='fas fa-filter' fontSize='small' style={{ paddingLeft: 16 }} />
              </Grid>
              <Grid item xs={8}>
                <Grid container alignItems="flex-start" justify="flex-end" direction="row">
                <Button color='primary' variant="contained" >Add to Group</Button>
                </Grid>
              </Grid>
            </Grid>
            <DataTable
              noHeader={true}
              columns={columns}
              data={data}
              selectableRows // add for checkbox selection
              Clicked
              // Selected={handleChange}
              pagination
            />
          </div>
        )}
      </div>
      <div
        role="tabpanel"
        hidden={value !== 1}
        id={`simple-tabpanel-1`}
        aria-labelledby={`simple-tab-1`}
      // {...other}
      >
        {value === 1 && (
          <DataTable
            noHeader={true}
            columns={columns}
            data={data}
            selectableRows // add for checkbox selection
            Clicked
          // Selected={handleChange}
          />
        )}
      </div>
      <div
        role="tabpanel"
        hidden={value !== 2}
        id={`simple-tabpanel-2`}
        aria-labelledby={`simple-tab-2`}
      // {...other}
      >
        {value === 2 && (
          <div>Learner Pods</div>
        )}
      </div>
    </Container>
  );
}

export default App;
