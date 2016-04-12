define(
    [
        'react',
    ],
    function (React) {

        var colors = ["danger", "yellow", "primary", "success"];


        var ProgressBar = React.createClass({
            getInitialState: function () {
                return {
                    color: null,
                    amount: null,
                }
            },

            componentDidMount: function () {

                var color=(colors.indexOf(this.props.color))?this.props.color:colors[0];

                this.setState({
                    color: color,
                    amount: this.props.amount,
                });

            },


            render: function () {
                var that = this;

                return (
                    <div className="progress progress-xs">
                        <div className="progress-bar progress-bar-'+ colors[color%colors.length] + '" style="width: '+  amount + '%">
                        </div>
                    </div>

                )
            }
        });

        return ProgressBar;
    }
)