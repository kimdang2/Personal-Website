import React, { Component } from 'react';
import profile from "../../data/profile";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from './EducationPanel.module.css'

class EducationPanel extends Component {
    render() {
        return (
            <div className={styles.educationPanel} >
                <Grid container justify="center" alignItems="center" spacing={40}>
                    {profile.Edu.map(education => (
                        <Grid item xs={9} sm={9} key={education.SchoolName}>
                            <Card className={styles.card}>
                                <div className={styles.cardDetails}>
                                    {
                                        education.Education.length > 0 ? (
                                            <ExpansionPanel defaultExpanded>
                                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                                    <Typography variant="h5">{"Education"}</Typography>
                                                </ExpansionPanelSummary>
                                                <Divider variant="middle" />
                                                {education.Education.map((education) => (

                                                    <ExpansionPanelDetails key={education.Name}>
                                                        <Grid container>
                                                            <Grid item xs={12}>
                                                                <Typography component="h2" variant="h5">
                                                                    {education.Name}
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Typography variant="subtitle1" color="textSecondary">
                                                                    {education.Date}
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Typography variant="subtitle1" paragraph>
                                                                    {education.Description}
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </ExpansionPanelDetails>

                                                ))}
                                            </ExpansionPanel>
                                        ) : null
                                    }

                                    {
                                        education.Experience.length > 0 ? (
                                            <ExpansionPanel defaultExpanded>
                                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                                    <Typography variant="h5">{"Experience"}</Typography>
                                                </ExpansionPanelSummary>
                                                <Divider variant="middle" />
                                                {education.Experience.map((experience) => (

                                                    <ExpansionPanelDetails key={experience.Name}>
                                                        <Grid container>
                                                            <Grid item xs={12}>
                                                                <Typography component="h2" variant="h5">
                                                                    {experience.Name}
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Typography  variant="subtitle1"
                                                                color="textSecondary">
                                                                    {experience.Company}
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Typography variant="subtitle1" color="textSecondary">
                                                                    {experience.Date}
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Typography variant="subtitle1" paragraph>
                                                                    {experience.Sentence1}
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Typography variant="subtitle1" paragraph>
                                                                    {experience.Sentence2}
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Typography variant="subtitle1" paragraph>
                                                                    {experience.Sentence3}
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Typography variant="subtitle1" paragraph>
                                                                    {experience.Sentence4}
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Typography variant="subtitle1" paragraph>
                                                                    {experience.Sentence5}
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </ExpansionPanelDetails>

                                                ))}
                                            </ExpansionPanel>
                                        ) : null
                                    }

                                    {
                                        education.Certificates.length > 0 ? (
                                            <ExpansionPanel defaultExpanded>
                                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                                    <Typography variant="h5">{"Certificates"}</Typography>
                                                </ExpansionPanelSummary>
                                                <Divider variant="middle" />
                                                {education.Certificates.map((certificate) => (

                                                    <ExpansionPanelDetails key={certificate.Name}>
                                                        <Grid container>
                                                            <Grid item xs={12}>
                                                                <Typography component="h2" variant="h5">
                                                                    {certificate.Name}
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Typography variant="subtitle1" color="textSecondary">
                                                                    {certificate.Organization + ' - ' + certificate.Date}
                                                                </Typography>
                                                            </Grid>
                                                            {/* <Grid item xs={12}>
                                                                <Typography variant="subtitle1" paragraph>
                                                                    {certificate.Description}
                                                                </Typography>
                                                            </Grid> */}
                                                            <Grid item xs={12}>
                                                                <Typography variant="subtitle1" paragraph>
                                                                    {<a href={certificate.Link}>See credential</a>}
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </ExpansionPanelDetails>

                                                ))}
                                            </ExpansionPanel>
                                        ) : null
                                    }
                                </div>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }
}

export default EducationPanel;