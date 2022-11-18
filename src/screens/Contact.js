import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material"
import ImageIcon from '@mui/icons-material/Image';


export default function Contact() {

    const contacts = [
        {
            name: 'Abel',
            phone: '5802943'
        },
        {
            name: 'Abel',
            phone: '5802943'
        },
        {
            name: 'Abel',
            phone: '5802943'
        },
        {
            name: 'Abel',
            phone: '5802943'
        },
        {
            name: 'Abel',
            phone: '5802943'
        }
    ]

    return <>
        <List
            sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
            }}
        >
            {contacts.map((contact, i) =>
                <>
                    <ListItem>
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
                </>
            )}

        </List>
    </>
}