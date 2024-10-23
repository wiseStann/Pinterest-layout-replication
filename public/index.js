'use strict';

import {App} from './app.js';

const root = document.getElementById('root');

const pins = [
	{
		PinID: 1,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1655635949384-f737c5133dfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
	},
	{
		PinID: 2,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1596348158371-d3a25ec4dcf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy',
	},
	{
		PinID: 3,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1580618432485-1e08c5039909?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy',
	},
	{
		PinID: 4,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1593376893114-1aed528d80cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy',
	},
	{
		PinID: 5,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1680474569854-81216b34417a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmV1cmFsJTIwbmV0d29ya3N8ZW58MHwxfDB8fHwy',
	},
	{
		PinID: 6,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1668395093559-338fa935d929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
	},
	{
		PinID: 7,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1530388684420-55a62e95ed82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
	},
	{
		PinID: 8,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1587383378486-83d683d9d02d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
	},
	{
		PinID: 9,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1518276780006-c85b06fa3c11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
	},
	{
		PinID: 10,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1578259819688-2bf7b20a351a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
	},
	{
		PinID: 11,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1614029655965-2464911905a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
	},
	{
		PinID: 12,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1603745871918-d756fb3c2c5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
	},
	{
		PinID: 13,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1700075489227-47f36fb2709b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
	},
	{
		PinID: 14,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1613591876822-846e82526ee7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8MXwwfHx8Mg%3D%3D',
	},
	{
		PinID: 15,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1508022713622-df2d8fb7b4cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlmZmVyZW50fGVufDB8MXwwfHx8Mg%3D%3D',
	},
	{
		PinID: 16,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1528834042156-20aedce195b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlmZmVyZW50fGVufDB8MXwwfHx8Mg%3D%3D',
	},
	{
		PinID: 17,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1697530786890-2e19f3f1bd57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlmZmVyZW50fGVufDB8MXwwfHx8Mg%3D%3D',
	},
	{
		PinID: 18,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1507856745667-48442b4e5da9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlmZmVyZW50fGVufDB8MXwwfHx8Mg%3D%3D',
	},
	{
		PinID: 19,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1682238929963-10c41d35010b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGlmZmVyZW50fGVufDB8MXwwfHx8Mg%3D%3D',
	},
	{
		PinID: 20,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1690052346621-e541ac1efe9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGlmZmVyZW50fGVufDB8MXwwfHx8Mg%3D%3D',
	},
	{
		PinID: 21,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1711898387672-8535c5e2cddc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGlmZmVyZW50fGVufDB8MXwwfHx8Mg%3D%3D',
	},
	{
		PinID: 22,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1548904972-e460154b8d1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRpZmZlcmVudHxlbnwwfDF8MHx8fDI%3D',
	},
	{
		PinID: 23,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1551632179-37fd8131de13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRpZmZlcmVudHxlbnwwfDF8MHx8fDI%3D',
	},
	{
		PinID: 24,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1609741199695-096c491c7ccc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRpZmZlcmVudHxlbnwwfDF8MHx8fDI%3D',
	},
	{
		PinID: 25,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1677781621038-bb8dc5af2b12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRpZmZlcmVudHxlbnwwfDF8MHx8fDI%3D',
	},
	{
		PinID: 26,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1653278260712-db607e211bfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRpZmZlcmVudHxlbnwwfDF8MHx8fDI%3D',
	},
	{
		PinID: 27,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1440735364183-ef9490dcaf18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRpZmZlcmVudHxlbnwwfDF8MHx8fDI%3D',
	},
	{
		PinID: 28,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1595500592218-478486255f5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRpZmZlcmVudHxlbnwwfDF8MHx8fDI%3D',
	},
	{
		PinID: 29,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1633773503626-6beb23068d35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGRpZmZlcmVudHxlbnwwfDF8MHx8fDI%3D',
	},
	{
		PinID: 30,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1667605173829-46e201492726?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRpZmZlcmVudHxlbnwwfDF8MHx8fDI%3D',
	},
	{
		PinID: 31,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1678481974493-bfd26b6c7ff5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGRpZmZlcmVudHxlbnwwfDF8MHx8fDI%3D',
	},
	{
		PinID: 32,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1592719169261-5523724eae20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGRpZmZlcmVudHxlbnwwfDF8MHx8fDI%3D',
	},
	{
		PinID: 33,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1551632436-154cc19ec64d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGRpZmZlcmVudHxlbnwwfDF8MHx8fDI%3D',
	},
	{
		PinID: 34,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1588829608109-2ba085f056e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGRpZmZlcmVudHxlbnwwfDF8MHx8fDI%3D',
	},
	{
		PinID: 35,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1646569278934-12d9533d0a3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGRpZmZlcmVudHxlbnwwfDF8MHx8fDI%3D',
	},
	{
		PinID: 36,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1621359116686-e286eca688ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGRpZmZlcmVudHxlbnwwfDF8MHx8fDI%3D',
	},
	{
		PinID: 37,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1543165106-6c9083ee7b7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGRpZmZlcmVudHxlbnwwfDF8MHx8fDI%3D',
	},
	{
		PinID: 38,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1529079091928-9973d83c87de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGRpZmZlcmVudHxlbnwwfDF8MHx8fDI%3D',
	},
	{
		PinID: 39,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1663669959185-57940d6bb6a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGRpZmZlcmVudHxlbnwwfDF8MHx8fDI%3D',
	},
	{
		PinID: 40,
		AuthorAvatar: 'assets/avatar.png',
		AuthorName:   'Mary Jane',
		MediaUrl:    'https://images.unsplash.com/photo-1620246273220-f87a3303cdab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGRpZmZlcmVudHxlbnwwfDF8MHx8fDI%3D',
	},
];

export const app = new App(root, pins);
app.renderLayoutPage(window.location.pathname);
