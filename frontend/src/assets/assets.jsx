export const footer_data = [
    {
        "title": "Quick Links",
        "links": [
            "Home",
            "About Us",
            "Blog",
            "Contact",
            "Our Services"
        ]
    },
    {
        "title": "Need Help",
        "links": [
            "Support Center",
            "FAQs",
            "Privacy Policy",
            "Terms & Conditions",
            "Report an Issue"
        ]
    },
    {
        "title": "Follow Us",
        "links": [
            "Facebook",
            "Instagram",
            "LinkedIn",
            "Twitter",
            "YouTube"
        ]
    }
]



import {
  LayoutDashboard,
  User,
  Settings,
  Home,
  Search,
  Bell,
  MessageCircle,
  Calendar,
  FileText,
  BarChart3,
  FolderOpen,
  ShoppingCart,
  Heart,
  Star,
  LogOut,
  SquarePlus,
  List,
  CalendarCheck2,
  MessagesSquare,
  SquarePen,
  ClipboardPaste,
  Trash,
  CircleCheckBig ,
  CloudUpload,
} from "lucide-react";

// each icon stored as JSX <Icon />
export const icons = {
  dashboard: <LayoutDashboard size={24} />,
  add: <SquarePlus size={24} />,
  list: <List size={24} />,
  calender: <CalendarCheck2 size={24} />,
  comment: <MessagesSquare size={24} />,
  draft: <SquarePen size={24} />,
  recent: <ClipboardPaste size={24} />,
  delete: <Trash size={18} fill="red" />,
  tick : <CircleCheckBig size={24} stroke="green"/>,
  upload : <CloudUpload size={28} />,
  user: <User size={24} />,
  settings: <Settings size={24} />,
  home: <Home size={24} />,
  search: <Search size={24} />,
  bell: <Bell size={24} />,
  message: <MessageCircle size={24} />,
  calendar: <Calendar size={24} />,
  document: <FileText size={24} />,
  analytics: <BarChart3 size={24} />,
  folder: <FolderOpen size={24} />,
  cart: <ShoppingCart size={24} />,
  heart: <Heart size={24} />,
  star: <Star size={24} />,
  logout: <LogOut size={24} />,
};