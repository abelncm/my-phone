import ImageIcon from '@mui/icons-material/Image';
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Box } from "@mui/system";

export default function ContactList({contacts}) {

    return <>
        <List
            sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
            }}
        >
            {contacts.map((contact, i) =>
                <Box key={i}>
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={contact.name}
                            secondary={contact.phone} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </Box>
            )}

        </List>
    </>
}