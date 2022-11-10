import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export function LoadingCard() {
	return (
		<Stack spacing={1}>
			<Skeleton variant='rectangular' width={275} height={500} />
		</Stack>
	);
}
