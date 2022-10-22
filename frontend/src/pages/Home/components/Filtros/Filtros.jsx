import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Checkbox, ListItem, ListItemButton } from '@mui/material';
import React from 'react';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export function Filtros() {
	const [checked, setChecked] = React.useState([0]);

	const handleToggle = value => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};
	return (
		<div>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1a-content'
					id='panel1a-header'
				>
					<Typography>Marcas</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<List
						sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
					>
						{[0, 1, 2, 3].map(value => {
							const labelId = `checkbox-list-label-${value}`;

							return (
								<ListItem key={value} disablePadding>
									<ListItemButton
										role={undefined}
										onClick={handleToggle(value)}
										dense
									>
										<ListItemIcon>
											<Checkbox
												edge='start'
												checked={checked.indexOf(value) !== -1}
												tabIndex={-1}
												disableRipple
												inputProps={{ 'aria-labelledby': labelId }}
											/>
										</ListItemIcon>
										<ListItemText id={labelId} primary={`marca ${value + 1}`} />
									</ListItemButton>
								</ListItem>
							);
						})}
					</List>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
