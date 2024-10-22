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
	// 7: {
	// 	AuthorAvatar: 'assets/avatar.png',
	// 	AuthorName:   'Mary Jane',
	// 	MediaUrl:    'https://images.unsplash.com/photo-1655737484103-193c4385e44d?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	// },
];

export const app = new App(root, pins);
app.renderLayoutPage(window.location.pathname);
