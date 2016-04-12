define(
    [
        'react',
    ],
    function (React) {

        var colors = ["danger", "yellow", "primary", "success"];


        var ProgressBar = React.createClass({
            getInitialState: function () {
                //Color passed as a integer -> return colorname (scaling integer with possible values)
                if (Number(this.props.color)>0)
                    var color=colors[this.props.color % colors.length];
                else
                    var color=(colors.indexOf(this.props.color) >= 0) ? this.props.color : colors[0];


                return {
                    color: color,
                    amount: this.props.amount,
                }
            },

            componentWillReceiveProps: function(nextProps) {
                this.setState({
                    amount: nextProps.amount
                });
            },


            component: function () {
                //Color passed as a integer -> return colorname (scaling integer with possible values)
                if (Number(this.props.color)>0)
                    var color=colors[this.props.color % colors.length];
                else
                    var color=(colors.indexOf(this.props.color) >= 0) ? this.props.color : colors[0];


                return {
                    color: color,
                    amount: this.props.amount,
                }
            },


            render: function () {
                var that = this;

                return (
                    <div className="progress progress-xs">
                        <div className={"progress-bar progress-bar-"+that.state.color} style={{width: that.state.amount + '%'}}>
                        </div>
                    </div>

                )
            }
        });

        return ProgressBar;
    }
)