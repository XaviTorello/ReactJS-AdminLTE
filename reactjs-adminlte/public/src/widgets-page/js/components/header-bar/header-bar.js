define(
    [
        'react',
        'jquery',
        './header-messages',
        './header-notifications',
        './header-tasks',
        './header-user-account'
    ],
    function (React, $, HeaderMessages, HeaderNotifications, HeaderTasks, UserAccount) {
        var HeaderBar = React.createClass({
            getInitialState: function () {
                return {
                    messages: [],
                    notifications: [],
                    tasks: [],
                    userOptions: {}
                }
            },
            pushMenu: function () {
                var body = document.body;
                if(body.clientWidth > 768){
                    if(body.className.indexOf('sidebar-collapse') === -1){
                        body.className += ' sidebar-collapse';
                    }else {
                        body.className = body.className.replace(' sidebar-collapse', '');
                    }
                }else{
                    if (body.className.indexOf('sidebar-open') === -1) {
                        body.className += ' sidebar-open';
                    }else{
                        body.className = body.className.replace(' sidebar-open','');
                    }
                }
            },
            componentDidMount: function () {
                var messages = [{
                    displayName: 'Support Team',
                    displayPicture: 'dist/img/user2-160x160.jpg',
                    messageSubject: 'Why not buy a new awesome theme?',
                    messageTime: '5 mins',
                }, {
                    displayName: 'AdminLTE Design Team',
                    displayPicture: 'dist/img/user3-128x128.jpg',
                    messageSubject: 'Why not buy a new awesome theme?',
                    messageTime: '2 hours',
                }, {
                    displayName: 'Developers',
                    displayPicture: 'dist/img/user4-128x128.jpg',
                    messageSubject: 'Why not buy a new awesome theme?',
                    messageTime: 'Today',
                }, {
                    displayName: 'Sales Department',
                    displayPicture: 'dist/img/user3-128x128.jpg',
                    messageSubject: 'Why not buy a new awesome theme?',
                    messageTime: 'Yesterday',
                }, {
                    displayName: 'Reviewers',
                    displayPicture: 'dist/img/user4-128x128.jpg',
                    messageSubject: 'Why not buy a new awesome theme?',
                    messageTime: '2 days',
                }];

                var notifications = [{
                    subject: '5 new members joined today',
                    className: 'fa fa-users text-aqua'
                }, {
                    subject: 'Very long description here that may not fit into the page and may cause design problems',
                    className: 'fa fa-warning text-yellow'
                }, {
                    subject: '5 new members joined',
                    className: 'fa fa-users text-red'
                }, {
                    subject: '25 sales made',
                    className: 'fa fa-shopping-cart text-green'
                }, {
                    subject: 'You changed your username',
                    className: 'fa fa-user text-red'
                }];

                var tasks = [{
                    subject: 'Design some buttons',
                    percentage: 20
                }, {
                    subject: 'Create a nice theme',
                    percentage: 40
                }, {
                    subject: 'Some task I need to do',
                    percentage: 60
                }, {
                    subject: 'Make beautiful transitions',
                    percentage: 80
                }];


                this.setState({
                    messages: messages,
                    notifications: notifications,
                    tasks: tasks,
                    userOptions: this.props.userOptions
                });
            },
            render: function () {
                var that = this;

                return (
                    <header className="main-header">
                        {/* Logo */}
                        <a href="index2.html" className="logo">
                            {/* mini logo for sidebar mini 50x50 pixels */}
                            <span className="logo-mini">o<b>KW</b></span>
                            {/* logo for regular state and mobile devices */}
                            <span className="logo-lg"><b>oraKWlum</b> Frontend</span>
                        </a>
                        {/* Header Navbar: style can be found in header.less */}
                        <nav className="navbar navbar-static-top" role="navigation">
                            {/* Sidebar toggle button*/}
                            <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button" onClick={that.pushMenu}>
                                <span className="sr-only">Toggle navigation</span>
                            </a>
                            <div className="navbar-custom-menu">
                                <ul className="nav navbar-nav">
                                    {/* Messages: style can be found in dropdown.less*/}
                                    <li className="dropdown messages-menu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="fa fa-envelope-o"></i>
                                            <span className="label label-success">{that.state.messages.length}</span>
                                        </a>
                                        <HeaderMessages messages={that.state.messages} />
                                    </li>
                                    {/* Notifications: style can be found in dropdown.less */}
                                    <li className="dropdown notifications-menu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="fa fa-bell-o"></i>
                                            <span className="label label-warning">{that.state.notifications.length}</span>
                                        </a>
                                        <HeaderNotifications notifications={that.state.notifications} />
                                    </li>
                                    {/* Tasks: style can be found in dropdown.less */}
                                    <li className="dropdown tasks-menu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="fa fa-flag-o"></i>
                                            <span className="label label-danger">{that.state.notifications.length}</span>
                                        </a>
                                        <HeaderTasks tasks={that.state.tasks} />
                                    </li>
                                    {/* User Account: style can be found in dropdown.less */}
                                    <li className="dropdown user user-menu">

                                        <UserAccount userOptions={that.props.userOptions}/>

                                    </li>
                                    { /* ontrol Sidebar Toggle Button */}
                                    <li>
                                        <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </header>
                )
            }
        });

        return HeaderBar;
    }
)