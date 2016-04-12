define(
    [
        'react',
        './table-chooser',
        '../progress-bar/progress-bar',
    ],
    function (React, TableChooser, ProgressBar) {

        function change_table_type(div, id, type, max_value=null) {

            //set the table container on the filter expression
            div += " table";


            if (max_value == null)
                max_value = $(div + "").attr("max");

            if (max_value==0)
                return;

            switch(type) {
                case 'bar':
                    //Apply colored bar for each consumption   [not done previously to avoid process N elements over scenarios to fetch the max]
                    $(div + " .consumption").each( function(id, val) {
                        valuee=($(this).attr("value"));
                        colorr=($(this).attr("color"));
                        $(this).html(getProgressBar(valuee/max_value*100, colorr));
                    });
                    break;

                case 'text':
                    //Apply colored bar for each consumption   [not done previously to avoid process N elements over scenarios to fetch the max]
                    $(div + " .consumption").each( function(id, val) {
                        valuee=($(this).attr("value"));
                        colorr=($(this).attr("color"));
                        $(this).html(valuee);
                    });
                    break;

                default:
                case 'all':
                    //Append colored bar for each consumption   [not done previously to avoid process N elements over scenarios to fetch the max]
                    $(div + " .consumption").each( function(id, val) {
                        valuee=($(this).attr("value"));
                        colorr=($(this).attr("color"));

                        //Set text and later progressbar
                        $(this).html(getProgressBar(valuee/max_value*100, colorr));
                        $(this).append(valuee);
                    });
                    break;
            }
        }


        //Validate Table Type. Default: text
        function validateTableType(type){
            return (["bar","text","both"].indexOf(type)>=0)?type:"text";
        }

        function formatTableValue(type, amount, max, count) {
            var text, progressBar = null;

            //scale amount on percentatge
            var amountScaled = Math.round(amount * 100 / max);

            switch (type) {
                case 'bar':
                    progressBar = (<ProgressBar amount={amountScaled} color={count}/>);
                    break;

                case 'text':
                    text = amount;
                    break;

                default:
                case 'both':
                    progressBar = (<ProgressBar amount={amountScaled} color={count}/>);
                    text = amount;
                    break;
            }

            return (
                <span>
                    {progressBar}
                    {text}
                </span>
            );
        }



        var Table = React.createClass({
            getInitialState: function () {
                var chooser = (this.props.chooser == "true")?true:false;

                var tableType = validateTableType(this.props.tableType);

                return {
                    chooser: chooser,
                    chooserType: this.props.chooserType,
                    tableType: tableType,
                }
            },


            handleChangeChooser: function(event) {
                this.setState({
                    tableType: event
                })
            },




            render: function () {
                var that = this;

                //Type chooser
                var tableChooser=null;

                if (that.state.chooser) {
                    var options =  ["text", "bar", "both"];

                    tableChooser = (
                        <TableChooser options={options} title="Tipus:" parentID={that.props.id}  type={that.state.chooserType} onChange={this.handleChangeChooser}/>
                    );
                }

                //Header of the table
                var headersList = that.props.header.map(function (headerEntry,idHeader) {
                    return (
                        <th key={idHeader}>{headerEntry.title}</th>
                    )
                });

                //The content of the table
                var rowsList = that.props.rows.map(function (rowEntry, idRow) {
                    return (
                        <tr key={idRow}>
                            <td key={rowEntry.id}>{rowEntry.hour}</td>

                            {rowEntry.values.map ( function (value, idValues){
                                //get the content to print in the table (text, progress, both)
                                var formatedValue = formatTableValue(that.state.tableType, value, that.props.maxValue, idValues);

                                return (
                                    <td key={idValues} aria-label={value}>{formatedValue}</td>
                                );
                            })}
                        </tr>
                    )
                });

                return (
                    <div id={"div_" + that.props.id}>
                        <h3 className="text-center">{this.props.title}</h3>

                        {tableChooser}

                        <table className="table table-striped table-bordered" id={"table_" + that.props.id} max="5" >
                            <thead>
                                <tr>
                                    {headersList}
                                </tr>
                            </thead>
                            <tbody>
                                {rowsList}
                            </tbody>
                        </table>
                    </div>
                )
            }
        });

        return Table;
    }
)