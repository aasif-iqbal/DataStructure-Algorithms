class Graph{
    constructor(){
        this.noOfNode = 0;
        this.adjacentList = {}; //with obj quickly find items as compare to array where shifting index is costly.
    }

    addVertex(node){
        this.adjacentList[node] = [];  //adjacentList = {[key]};
        this.noOfNode++;    
    }

    addEdeg(node1, node2){
        //undirected graph

        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }

    showConnection(){
        const allNodes = Object.keys(this.adjacentList);

        for(let node of allNodes){
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex;

            for(vertex of nodeConnections){
                connections += vertex + " ";
            }
            console.log(node + " ---> " + connections);
        }
    }
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');

myGraph.addEdeg('3', '1');
myGraph.addEdeg('3', '4');
myGraph.addEdeg('4', '2');
myGraph.addEdeg('4', '5');
myGraph.addEdeg('1', '2');
myGraph.addEdeg('1', '0');
myGraph.addEdeg('0', '2');
myGraph.addEdeg('6', '5');

myGraph.showConnection();
