# Rbac-ui

*while running app if problem persist while logging in kindly refresh it because of local storage data are not been stored properly


RBAC-UI (Role-Based Access Control Interface):

A React-based Role-Based Access Control (RBAC) system for managing users, roles, and permissions efficiently. This application simplifies the process of assigning roles and permissions to users, enabling secure and structured access control.

Table of Contents:

Features
Technologies Used
Installation
Usage
Deployment


Features:

Add, edit, and delete users.
Assign roles and manage their permissions.
View detailed information about roles and permissions.
Responsive design for seamless experience across devices.

Technologies Used:

Frontend Framework: React.js
Styling: CSS, Media Queries for responsiveness
Deployment: Vercel


Usage:

1.User Management:

Add new users by clicking on the "Add User" button.
Change user status (Active, Inactive, Suspended) using the toggle in the user list.
Role Management:

2.Define roles and set specific permissions.
Assign roles to users from the user management section.

3.Permissions:
Add and remove permissions dynamically for roles.

Login:
i)Admin-
id-admin
pass-admin@123
status-Active

ii)User-
id-user
pass-user@123
status-Active

iii)inactiveUser:
id-inactiveUser
pass-inactive@123
status-inactive/suspended


Here when you login as admin you will get  three options role management, user-management, permission-management in user management your can manage status and there you can try login of present user without changing tab you can add permission all the data are been stored in localStorage so you might find delay

