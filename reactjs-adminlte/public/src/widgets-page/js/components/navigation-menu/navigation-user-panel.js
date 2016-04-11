define(
    [
        'react',
    ],
    function (React) {
        var UserPanel = React.createClass({
            getInitialState: function () {
                return {
                    displayName: "",
                    displayPicture: "",
                    status: "",
                }
            },

            componentDidMount: function () {
                this.setState({
                    displayName: this.props.userOptions.displayName,
                    displayPicture: this.props.userOptions.displayPicture,
                    status: this.props.userOptions.status,
                });
            },

            render: function () {
                var that = this;

                return (
                            <div className="user-panel">
                                <div className="pull-left image">
                                    <img src={that.state.displayPicture} className="img-circle" alt="User Image" />
                                </div>
                                <div className="pull-left info">
                                    <p>{that.state.displayName}</p>
                                    <a href="#"><i className="fa fa-circle text-success"></i> {that.state.status}</a>
                                </div>
                            </div>
                )
            }
        });

        return UserPanel;
    }
)
