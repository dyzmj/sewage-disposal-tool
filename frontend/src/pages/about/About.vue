<template>
  <div class="containers" style="border: 1px solid #ccc; padding: 50px; width: 100%; height: 800px">
    <svg class="dagre" width="100%" height="100%">
      <g class="container"></g>
    </svg>
    <div ref="tooltip" class="tooltip">
      <div>节点ID：{{currentNode.id}}</div>
      <div>节点名称：{{currentNode.nodeName}}</div>
    </div>
  </div>
</template>

<script>
  import dagreD3 from 'dagre-d3';
  import * as d3 from 'd3';

  export default {
    name: 'dagre',
    props: {
      tableList: {
        type: Array,
        // default: []
      }
    },
    data() {
      return {
        currentNode: {
          id: null,
          nodeName: '',
        },
        indexObj: {},
        nodes: [
          {id: -1,nodeName: "",shape: "rect"},
          {id: 0,nodeName: "配水井",shape: "rect"},
          {id: 1,nodeName: "预沉池",shape: "rect"},
          {id: 2,nodeName: "生物接触氧化池",shape: "rect"},
          {id: 3,nodeName: "",shape: "rect"},
          {id: 4,nodeName: "机械絮凝池",shape: "rect"},
          {id: 5,nodeName: "网格絮凝池",shape: "rect"},
          {id: 6,nodeName: "折板絮凝池",shape: "rect"},
          {id: 7,nodeName: "",shape: "rect"},
          {id: 8,nodeName: "平流沉淀池",shape: "rect"},
          {id: 9,nodeName: "斜管沉淀池",shape: "rect"},
          {id: 10,nodeName: "",shape: "rect"},
          {id: 11,nodeName: "普通快滤池",shape: "rect"},
          {id: 12,nodeName: "V型滤池",shape: "rect"},
          {id: 13,nodeName: "",shape: "rect"},
          {id: 14,nodeName: "臭氧活性炭",shape: "rect"},
          {id: 15,nodeName: "清水池",shape: "rect"},
          {id: 16,nodeName: "高密度沉淀池",shape: "rect"},
          {id: 17,nodeName: "机械澄清池",shape: "rect"},
          {id: 18,nodeName: "水力循环澄清池",shape: "rect"},
          {id: 19,nodeName: "气浮池",shape: "rect"},
          {id: 20,nodeName: "",shape: "rect"},
          {id: 21,nodeName: "超滤",shape: "rect"},
          {id: 22,nodeName: "排水池",shape: "rect"},
          {id: 23,nodeName: "排泥池",shape: "rect"},
          {id: 24,nodeName: "污泥浓缩池",shape: "rect"},
          {id: 25,nodeName: "污泥平衡池",shape: "rect"},
          {id: 26,nodeName: "离心脱水机",shape: "rect"},
          {id: 27,nodeName: "板框脱水机",shape: "rect"},
        ],
        edges: [
          {start: 0,end: 1,label: ""},
          {start: 0,end: 2,label: ""},
          // {start: 0,end: 11,label: ""},
          {start: 1,end: 4,label: ""},
          {start: 1,end: 5,label: ""},
          {start: 1,end: 6,label: ""},
          {start: 2,end: 16,label: ""},
          {start: 2,end: 17,label: ""},
          {start: 2,end: 18,label: ""},
          {start: 2,end: 19,label: ""},
          {start: 5,end: 8,label: ""},
          {start: 5,end: 9,label: ""},
          {start: 9,end: 11,label: ""},
          {start: 9,end: 12,label: ""},
          {start: 12,end: 14,label: ""},
          {start: 14,end: 15,label: ""},
          {start: 17,end: 21,label: ""},
          {start: 21,end: 15,label: ""},
          {start: 12,end: 22,label: ""},
          {start: 22,end: 0,label: ""},
          {start: 2,end: 23,label: ""},
          {start: 19,end: 23,label: ""},
          {start: 23,end: 24,label: ""},
          {start: 24,end: 25,label: ""},
          {start: 25,end: 26,label: ""},
          {start: 25,end: 27,label: ""},

        ],
        parents: [
          {children: 0, parent: -1, label: 'AAAA'},
          {children: 1, parent: 3, label: 'AAAA'},
          {children: 2, parent: 3, label: 'AAAA'},
          {children: 4, parent: 7, label: 'AAAA'},
          {children: 5, parent: 7, label: 'AAAA'},
          {children: 6, parent: 7, label: 'AAAA'},
          {children: 8, parent: 10, label: 'AAAA'},
          {children: 9, parent: 10, label: 'AAAA'},
          {children: 11, parent: 13, label: 'AAAA'},
          {children: 12, parent: 13, label: 'AAAA'},
          {children: 16, parent: 20, label: 'AAAA'},
          {children: 17, parent: 20, label: 'AAAA'},
          {children: 18, parent: 20, label: 'AAAA'},
          {children: 19, parent: 20, label: 'AAAA'},
        ],
      };
    },
    mounted() {
      this.draw();
      d3.selectAll('.node').on('mousedown', (e) => {
        if(e.target.nodeName === "rect") {
          if(e.target.style.fill === "rgb(97, 178, 228)") {
            e.target.style = "fill:#877ee1;stroke:#fff";
          } else {
            e.target.style = "fill:#61b2e4;stroke:#fff";
          }
        }
    });
    },
    methods: {
      getLine(node) {
        let brr = [];
        if (node.pre.length) {
          if (node.pre.length === 1) {
            brr.push({
              start: this.indexObj[node.pre[0]],
              end: this.indexObj[node.name],
              label: ""
            });
          } else {
            node.pre.map(v => {
              brr.push({
                start: this.indexObj[v],
                end: this.indexObj[node.name],
                label: ""
              });
            });
          }
        }
        return brr;
      },
      // 绘制简单的流程图
      draw() {
        // 创建 Graph 对象
        const g = new dagreD3.graphlib.Graph({compound: true})
        .setGraph({
          zoom: -1,
          ranker: "network-simplex",//连线算法
          // ranker: "tight-tree",//连线算法
          // ranker: "longest-path",//连线算法
          rankdir: 'LR', // 流程图从下向上显示，默认'TB'，可取值'TB'、'BT'、'LR'、'RL'
        })
        .setDefaultEdgeLabel(() => ({}));

        // Graph添加节点
        this.nodes.forEach(node => {
          g.setNode(node.id, {
            id: node.id,
            label: node.nodeName,
            shape: node.shape, //节点形状，可以设置rect(长方形),circle,ellipse(椭圆),diamond(菱形) 四种形状，还可以使用render.shapes()自定义形状
            style: 'fill:#fff;stroke:#70baff', //节点样式,可设置节点的颜色填充、节点边框 fill:#61b2e4;stroke:#fff
            labelStyle: 'fill: #000;font-weight:bold', //节点标签样式, 可设置节点标签的文本样式（颜色、粗细、大小）fill: #fff;font-weight:bold
            rx: 5, // 设置圆角
            ry: 5, // 设置圆角
            paddingBottom: 15,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 15,
          });
        });

        // Graph添加节点之间的连线
        if (this.nodes.length > 1) {
          this.edges.forEach(edge => {
            g.setEdge(edge.start, edge.end, {
              label: edge.label, //边标签
              style: 'stroke: #70baff; fill: none; stroke-width: 2px', // 连线样式
              arrowheadStyle: 'fill: #70baff;stroke: #70baff;', //箭头样式，可以设置箭头颜色
              arrowhead: 'vee', //箭头形状，可以设置 normal,vee,undirected 三种样式，默认为 normal,
              animated: true 
            })
          });
          this.parents.forEach(par =>{
            g.setParent(par.children, par.parent, { 
              label: par.label, // 标签
            })
          });
        }

        // 获取要绘制流程图的绘图容器
        const container = d3.select('svg.dagre').select('g.container');

        // 创建渲染器
        const render = new dagreD3.render();
        // 在绘图容器上运行渲染器绘制流程图
        render(container, g);

        // 拖拽缩放
        const svg = d3.select('svg.dagre');
        let zoom = d3.zoom().scaleExtent([0.5, 2]).on('zoom', current => {
          container.attr('transform', current.transform);
        });
        svg.call(zoom);


        // 鼠标悬停显示隐藏tooltip
        const that = this;
        const tooltipBox = that.$refs.tooltip;
        container.on('mouseover', e => {
          if (e.target.nodeName === "rect") {
            that.currentNode = that.nodes.filter(item => item.id === Number(e.target.__data__))[0];
            tooltipBox.style.display = 'block';
            tooltipBox.style.top = e.clientY + 20 + 'px';
            tooltipBox.style.left = e.clientX + 'px';
          }
        }).on('mouseout', function () {
          tooltipBox.style.display = 'none';
        })
      },
    },
  };

</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
  }
  .tooltip {
    position: absolute;
    font-size: 12px;
    background-color: white;
    border-radius: 3px;
    box-shadow: rgb(174, 174, 174) 0px 0px 10px;
    cursor: pointer;
    display: none;
    padding: 10px;
  }

  .tooltip>div {
    padding: 10px;
  }
</style>

<!-- <template>
    <div class="new-page" :style="`min-height: ${pageMinHeight}px`">
      <h1>{{$t('content')}}</h1>
    </div>
  </template>
  
  <script>
    import {mapState} from 'vuex'
    export default {
      name: 'Demo',
      i18n: require('./i18n'),
      data() {
        return {
        }
      },
      computed: {
        ...mapState('setting', ['pageMinHeight']),
        desc() {
          return this.$t('description')
        }
      }
    }
  </script>
  
  <style scoped lang="less">
  @import "index";
  </style> -->