import {SystemRoles}from'../../utils/SystemRoles.js'



export const AuthRolesApi={
    LogOut:[SystemRoles.User,SystemRoles.Admin],
    ChangePassword:[SystemRoles.User,SystemRoles.Admin],
    
}