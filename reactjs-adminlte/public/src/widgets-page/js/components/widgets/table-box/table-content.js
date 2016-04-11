define(
    [
        'react',
    ],
    function (React) {
        var Table = React.createClass({
            getInitialState: function () {
                return {

                }


            },

            componentDidMount: function () {

                this.setState({

                });
            },

            render: function () {
                var that = this;

                var rowsList = that.props.rows.map(function (rowEntry) {
                    var values = rowEntry.values.map ( function (value){
                        return (<td key={value.id}>{value}</td>)
                    });

                    return (
                        <tr key={rowEntry.id}>
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

                return (<div>
                            <h3 className="text-center">{this.props.title}</h3>

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