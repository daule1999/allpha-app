import { Text } from "react-native";
import About from "../screens/About";
import Home from '../screens/Home'

export const screens = [
  {
    name: 'home',
    component: Home,
    key: 'home',
    bTab:false
  },
  {
    name: 'about',
    component: About,
    key: 'about',
    bTab:true
  },
  // {
  //     name: 'password',
  //     component: Password 
  // },
  // {
  //     name: 'Airtime',
  //     component: Airtime, 
  // },
  // {
  //     name: 'profile',
  //     component: Profile, 
  // },
  // {
  //     name: 'Transfer',
  //     component: Transfer, 
  // },
  // {
  //     name: 'Bills',
  //     component: Bills, 
  // },
  // {
  //     name: 'Cash',
  //     component: Cash, 
  // },
  // {
  //     name: 'QuickPay',
  //     component: QuickPay, 
  // },
  // {
  //     name: 'Split',
  //     component: Split, 
  // },
]
