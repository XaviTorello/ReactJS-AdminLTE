define(
    [
        'react',
    ],
    function (React) {
        var UserAccount = React.createClass({
            getInitialState: function () {
                return {
                    messages: [],
                    notifications: [],
                    tasks: []
                }
            },

            componentDidMount: function () {

                this.setState({

                });
            },

            render: function () {
                var that = this;

                return (
                    <li className="dropdown user user-menu">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                            <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User Image" />
                            <span className="hidden-xs">Xavi Torelló</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li className="user-header">
                                <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                                <p>
                                    Xavi Torelló - Web Developer
                                    <small>Member since Nov. 2012</small>
                                </p>
                            </li>
                            <li className="user-body">
                                <div className="col-xs-4 text-center">
                                    <a href="#">Followers</a>
                                </div>
                                <div className="col-xs-4 text-center">
                                    <a href="#">Sales</a>
                                </div>
                                <div className="col-xs-4 text-center">
                                    <a href="#">Friends</a>
                                </div>
                            </li>
                            <li className="user-footer">
                                <div className="pull-left">
                                    <a href="#" className="btn btn-default btn-flat">Profile</a>
                                </div>
                                <div className="pull-right">
                                    <a href="#" className="btn btn-default btn-flat">Sign out</a>
                                </div>
                            </li>
                        </ul>
                    </li>
                )
            }
        });

        return UserAccount;
    }
)

