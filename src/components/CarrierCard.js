import React from 'react';
//Material UI
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuBookIcon from '@material-ui/icons/MenuBook';
//Components
import CarrierFeatureList from "./CarrierFeatureList";
import CarrierCardHeader from "./CarrierCardHeader";

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

const CarrierCard = props => {
    const { description, featureList, disclaimerText, ...rest } = props;
    return (
        <div className="carrier-card">
            <ExpansionPanel style={{minHeight: '130px'}}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <CarrierCardHeader cardInfo={rest} />
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{justifyContent: 'space-between'}}>
                    {featureList && <CarrierFeatureList featureList={featureList}/>}
                    {description &&
                        <Typography>
                                <p className="card-header-sub-title"><MenuBookIcon style={{fontSize: '22px',marginRight: '8px'}}/> {`Why ${props.name}?`}</p>
                                <div className="card-description">
                                    {description}
                                    <p style={{fontSize: '11px'}}>{disclaimerText && <em>{disclaimerText}</em>}</p>
                                </div>
                        </Typography>}
                        </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
};

export default CarrierCard;
