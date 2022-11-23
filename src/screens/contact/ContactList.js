import { DeleteOutline } from '@mui/icons-material';
import ImageIcon from '@mui/icons-material/Image';
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import DeleteContact from './DeleteContact';

export default function ContactList({ contacts, setContacts }) {

    return <>
        <List
            sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
                overflow: 'auto',
                height: '95%'
            }}
        >
            {contacts.map((contact, i) =>
                <Box key={i}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={contact.name}
                            secondary={contact.phone} />
                        <DeleteContact 
                            contacts={contacts}
                            setContacts={setContacts}
                            contactPos={i}/>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </Box>
            )}

        </List>
    </>
}