define(
    [
        'react',
    ],
    function (React) {
        var UserAccount = React.createClass({
            getInitialState: function () {
                return {
                    displayName: this.props.userOptions.displayName,
                    description: this.props.userOptions.description,
                    displayPicture: this.props.userOptions.displayPicture,
                    company: this.props.userOptions.company,
                    date: this.props.userOptions.date,
                }
            },

            componentDidMount: function () {
                this.setState({
                    displayName: this.props.userOptions.displayName,
                    description: this.props.userOptions.description,
                    displayPicture: this.props.userOptions.displayPicture,
                    company: this.props.userOptions.company,
                    date: this.props.userOptions.date,
                });
            },

            render: function () {
                var that = this;

                return (
                    <li className="dropdown user user-menu">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                            <img src={that.state.displayPicture} className="user-image" alt="User Image" />
                            <span className="hidden-xs">{that.state.displayName}</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li className="user-header">
                                <img src={that.state.displayPicture} className="img-circle" alt="User Image" />
                                <p>
                                    {that.state.displayName} - {that.state.description}
                                    <small>Membre de {that.state.company} des de {that.state.date}</small>
                                </p>
                            </li>
                            <li className="user-body">
                                <div className="col-xs-4 text-center">
                                    <a href="#">Històric</a>
                                </div>
                                <div className="col-xs-4 text-center">
                                    <a href="#">Propostes</a>
                                </div>
                                <div className="col-xs-4 text-center">
                                    <a href="#">Compres</a>
                                </div>
                            </li>
                            <li className="user-footer">
                                <div className="pull-left">
                                    <a href="#" className="btn btn-default btn-flat">Perfil</a>
                                </div>
                                <div className="pull-right">
                                    <a href="#" className="btn btn-default btn-flat">Sortir</a>
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

