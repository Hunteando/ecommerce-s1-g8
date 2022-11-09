import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Checkbox, ListItem, ListItemButton } from '@mui/material';
import { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PropTypes from 'prop-types';

export function TypesOfFilters({
	filterList,
	typeFilter,
	setFilter,
	disable,
	setAccordion,
	accordion,
	checked,
}) {
	// const [checked, setChecked] = useState([]);
	const [table, setTable] = useState([]);

	useEffect(() => {
		setTable(filterList);
	}, []);

	const handleToggle = value => () => {
		const currentIndex = checked.indexOf(value);
		console.log(currentIndex);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}
		console.log(newChecked);

		// setChecked(newChecked);
		setFilter(newChecked);
	};
	const handleExpanded = value => e => {
		if (!accordion) setAccordion(value);
		console.log(accordion, value);
		if (accordion === value) setAccordion('');
	};
	return (
		<section>
			<Accordion disabled={disable}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1a-content'
					id='panel1a-header'
					onClick={handleExpanded(typeFilter)}
				>
					<Typography>{typeFilter}</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<List
						sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
					>
						{table.map(value => {
							const labelId = `checkbox-list-label-${value}`;

							return (
								<ListItem key={value}>
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
										<ListItemText id={labelId} primary={` ${value}`} />
									</ListItemButton>
								</ListItem>
							);
						})}
					</List>
				</AccordionDetails>
			</Accordion>
		</section>
	);
}
TypesOfFilters.propTypes = {
	filterList: PropTypes.array,
	typeFilter: PropTypes.string,
	setFilter: PropTypes.func,
	disable: PropTypes.bool,
	setAccordion: PropTypes.func,
	accordion: PropTypes.string,
	checked: PropTypes.array,
};
