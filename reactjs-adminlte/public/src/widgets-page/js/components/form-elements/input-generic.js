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
                };


            },

            handleChange: function (event) {
                //event.preventDefault();

                //console.log("handle",event.target.name, event.target.value);

                if (typeof this.props.onChange === 'function') {
                    this.props.onChange(event.target.value);
                }

                //console.dir(event.target);
                //console.log(this.props.name + " " + $("input[name="+ this.props.name+ "]:checked").val());
            },


            render: function () {
                var that = this;

                return (
                   <label key={that.id}>
                       <input
                           key={that.id}
                           type={that.props.type}
                           name={that.props.name}
                           value={that.props.value}
                           onChange={that.handleChange}
                           checked={that.props.checked}
                       />

                       {that.props.value}
                   </label>
                );

            }
        });

        return RadioButton;
    }
)