define(
    [
        'react',
        'jquery',
    ],
    function (React, $) {

        //WIP
        var RadioButton = React.createClass({
            getInitialState: function () {

                return {
                  isChecked: true
                };


            },

            handleChange: function (event) {
                //event.preventDefault();

                console.log("handle",event.target.value);
                //console.log(this.props.name + " " + $("input[name="+ this.props.name+ "]:checked").val());
            },

            toggleChange: function() {
                // $("input[name="+ this.props.name+ "]")

                this.setState({
                    isChecked: !this.state.isChecked
                }, function() {
                    console.log("insider",this.state);
                }.bind(this));
            },


            render: function () {
                var that = this;

                return (
                   <label key={that.id}>
                   <input key={that.id} type={that.props.type} name={that.props.name} value={that.props.value} onClick={that.handleChange} />
                       {that.props.value}
                   </label>
                );

            }
        });

        return RadioButton;
    }
)