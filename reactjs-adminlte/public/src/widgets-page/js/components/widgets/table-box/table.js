define(
    [
        'react',
        './table-chooser',
    ],
    function (React, TableChooser) {
        var Table = React.createClass({
            getInitialState: function () {
                return {

                }


            },

            componentDidMount: function () {

                var chooser = (this.props.chooser == "true")?true:false;


                this.setState({
                    chooser: chooser,
                    chooserType: this.props.chooserType,
                });
            },

            render: function () {
                var that = this;

                var rowsList = that.props.rows.map(function (rowEntry, idx) {
                    var values = rowEntry.values.map ( function (value){
                        return (<td key={value.id}>{value}</td>)
                    });

                    return (
                        <tr key={idx}>
                            <td key={rowEntry.id}>{rowEntry.hour}</td>
                            {values}
                        </tr>
                    )
                });


                var headersList = that.props.header.map(function (headerEntry) {
                    return (
                        <th key={headerEntry.id}>{headerEntry.title}</th>
                    )
                });


                //TableChooser

                var tableChooser=null;
                if (that.state.chooser) {
                    var options =  ["text", "bar", "both"];

                    tableChooser = (
                        <TableChooser options={options} title="Tipus de la taula:" parentID="43"  type={that.state.chooserType} />
                    );

                }
                return (<div>
                            <h3 className="text-center">{this.props.title}</h3>

                            {tableChooser}

                            <table className="table table-striped table-bordered" id="taula" max="5" >
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