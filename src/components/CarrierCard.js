import React, { useState } from 'react';
//Material UI
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { withStyles } from '@material-ui/core/styles';
//Components
import CarrierFeatureList from './CarrierFeatureList';
import CarrierCardHeader from './CarrierCardHeader';

// type Props = {
//     type: number,
//     name: string,
//     tagline: string,
//     featureList: Array<string>,
//     link: string,
//     linkText: string,
//     logo: string,
//     features: Array<Object>,
//     description: string,
//     rate: number,
//     stars: number,
//     disclaimerText: string
//     cornerTag: boolean
//     tag: string
// }

const styles = {
    expansionPanelRoot: {
        minHeight: '130px',
        marginTop: '16px'
    },
    expansionPanelSummaryRoot: {
        flexDirection: 'column',
        alignContent: 'space-between',
        padding: '0 10px'
    },
    expansionPanelSummaryContent: {
        width: '100%'
    },
    expansionPanelSummaryExpandIcon: {
        color: '#959595'
    },
    expansionPanelDetailsRoot: {
        justifyContent: 'space-between'
    }
};

const CarrierCard = props => {
    //Use hooks here to have one piece of local state that prevents the expansion panel from expanding when the quote button is clicked
    const [expand, setExpand] = useState(false);
    const { description, featureList, disclaimerText, classes, ...rest } = props;
    return (
            <ExpansionPanel className={classes.expansionPanelRoot} expanded={expand}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon className={classes.expansionPanelSummaryExpandIcon} onClick={() => setExpand(!expand)}/>}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                    classes={{
                        root: classes.expansionPanelSummaryRoot,
                        content: classes.expansionPanelSummaryContent
                    }}
                >
                    <CarrierCardHeader cardInfo={rest} />
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.expansionPanelDetailsRoot}>
                    {featureList &&
                        <CarrierFeatureList featureList={featureList}/>
                    }
                    {description &&
                        <Typography>
                                <p className='card-header-sub-title'><MenuBookIcon style={{fontSize: '22px',marginRight: '8px'}}/> {`Why ${props.name}?`}</p>
                                <div className='card-description'>
                                    {description}
                                    <p style={{fontSize: '11px'}}>{disclaimerText && <em>{disclaimerText}</em>}</p>
                                </div>
                        </Typography>
                    }
                        </ExpansionPanelDetails>
            </ExpansionPanel>
    );
};

export default withStyles(styles)(CarrierCard);
