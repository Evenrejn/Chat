import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import { FixedSizeList } from 'react-window';
import s from './messageList.module.css';

function renderRow(props) {
    const { index, style } = props;

    return (
        <ListItem style={style} key={index} component="div" disablePadding>
            <div className={s.user}><span className={s.userName}>User {`${index + 1}`}</span></div>
            {/* <ListItemButton id={`${index + 1}`>
                <ListItemText primary={`User ${index + 1}`}} />
            </ListItemButton> */}
        </ListItem>
    );
}

export default function VirtualizedList() {
    return (
        <Box
        sx={{ width: '100%', height: '100vh', maxWidth: 360, bgcolor: 'background.paper' }}
        >
        <FixedSizeList className={s.list}
            height={400}
            width={360}
            itemSize={46}
            itemCount={50}
            overscanCount={5}
        >
            {renderRow}
        </FixedSizeList>
        </Box>
    );
}