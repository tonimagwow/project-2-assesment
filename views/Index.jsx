const React = require('react');

class Index extends React.Component {
    render() {
        const { todo } = this.props;
        return(
            <html>
                <h1>To Do List</h1>

                <h3>{todo.length === 0 ? 'There aren\'t any tods!' : console.log('there are todos')}</h3>

                <div>
                    <ul>
                        {todo.map((todo, i) => {
                            return(
                                <>
                                    <li>
                                        {todo.task}
                                    </li>
                                    <form action={`/todo/${todo._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="Delete"/>
                                    </form>
                                </>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    <form action={`/todo`} method="POST">
                        <input type="text" name="todo"/>
                        <input type="submit" name="" value="ADD TODO"/>
                    </form>
                </div>

            </html>

        )
    }
}

module.exports = Index;