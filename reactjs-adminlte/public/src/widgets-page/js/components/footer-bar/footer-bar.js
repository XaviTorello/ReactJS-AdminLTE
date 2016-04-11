define(
    [
        'react',
    ],
    function (React) {
        var FooterBar = React.createClass({
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
                        <footer className="main-footer">
                            <div className="pull-right hidden-xs">
                                <b>Versió</b> {this.props.version}
                            </div>
                            <strong>{this.props.product} és un producte de <a target="_blank" href="{this.props.ownerUrl}">{this.props.owner}</a>.</strong>
                        </footer>
                )
            }
        });

        return FooterBar;
    }
)