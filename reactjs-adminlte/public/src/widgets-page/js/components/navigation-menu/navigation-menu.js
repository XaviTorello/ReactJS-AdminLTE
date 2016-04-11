define(
    [
        'react',
        'jquery',
        './navigation-user-panel',
    ],
    function (React, $, UserPanel) {
        var NavigationMenu = React.createClass({
            getInitialState: function() {
                return {
                    userOptions: [],
                }
            },

            componentDidMount: function () {
                this.setState({
                    userOptions: this.props.userOptions
                });

            },

            render: function () {
                var that = this;

                return (
                    <aside className="main-sidebar">
                        {/* sidebar: style can be found in sidebar.less */}
                        <section className="sidebar" >
                            {/* Sidebar user panel */}
                            <UserPanel userOptions={that.props.userOptions}/>

                            {/* search form */}
                            <form action="#" method="get" className="sidebar-form">
                                <div className="input-group">
                                    <input type="text" name="q" className="form-control" placeholder="Search..." />
                                    <span className="input-group-btn">
                                    <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i></button>
                                  </span>
                                </div>
                            </form>
                            {/* /.search form */}
                            {/* sidebar menu: : style can be found in sidebar.less */}
                            <ul className="sidebar-menu">
                                <li className="header">MAIN NAVIGATION</li>
                                <li className="active treeview">
                                    <a href="#">
                                        <i className="fa fa-dashboard"></i>
                                        <span>
                                            Dashboard
                                        </span>
                                        <i className="fa fa-angle-left pull-right"></i>
                                    </a>
                                    <ul className="treeview-menu">
                                        <li className="active"><a href="index.html"><i className="fa fa-circle-o"></i> Dashboard xv1</a></li>
                                        <li><a href="index2.html"><i className="fa fa-circle-o"></i> Dashboard v2</a></li>
                                    </ul>
                                </li>

                                <li><a href="documentation/index.html"><i className="fa fa-book"></i> <span>Documentation</span></a></li>
                                <li className="header">LABELS</li>
                                <li><a href="#"><i className="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
                                <li><a href="#"><i className="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
                                <li><a href="#"><i className="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
                            </ul>
                        </section>
                        {/* /.sidebar */}
                    </aside>
                )
            }
        });

        return NavigationMenu
    }
)