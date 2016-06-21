import { Circle } from 'rc-progress'

const Graph = (props) => {
  let count = props.tasks.count
  let length = props.tasks.list.length
  let countComplete = props.tasks.complete
  let countTodo = props.tasks.todo
  let countInProgress = props.tasks.inProgress

  let percentComplete = length > 0 ? countComplete/count*100 : 0
  let percentTodo = length > 0 ? countTodo/count*100 : 0
  let percentInProgress = length > 0 ? countInProgress/count*100 : 0
  let graphData = [ { name:'Complete',
                      count:countComplete,
                      percent:percentComplete,
                      color:'#3EC556' },
                    { name:'In Progress',
                      count:countInProgress,
                      percent:percentInProgress,
                      color:'#3E74C5' },
                    { name:'Todo',
                      count:countTodo,
                      percent:percentTodo,
                      color:'#C53E3E' } ]
                      
  let graphList = graphData.map((graph) => {
                    return (
                      <div key={ graph.name + graph.color } className='col-md-4 graph-border'>
                        <div className='text-center'>
                          <p className='center-text-horizontal graphOne graphNumber' > { graph.count } </p>
                          <p className='center-text-horizontal graphText' > { graph.name } </p>
                        </div>
                        <p className='percent'>{ Math.floor(graph.percent) }%</p>
                        <div className='col-md-6 col-centered'>
                          <Circle percent={ graph.percent } strokeWidth='10' strokeColor={ graph.color } />
                        </div>
                      </div>
                    )
                  })             
  return (
    <div className='container bordered-container'>
      { graphList }
    </div>
  );
}

export default Graph;