import React, { Component } from 'react'
import React3 from 'react-three-renderer'
import * as THREE from 'three'

class Canvas extends Component {
  constructor(props, context) {
    super(props, context)
    this.cameraPosition = new THREE.Vector3(0, this.props.height/2, 500)
    this.objectRotation = new THREE.Euler()
  }
  render() {
    const {width, height} = this.props
    return (
      <React3
        mainCamera="camera"
        width={width}
        height={height}
      >
        <scene>
          <perspectiveCamera
            name="camera"
            fov={45}
            aspect={width / height}
            near={10}
            far={10000}
            position={this.cameraPosition}
          />
          {this.props.frame && this.props.frame.pointables && this.props.frame.pointables.map(pointable => {
            const positions = [
              { position: pointable.tipPosition,  radius: 10, color: 'red'},
              { position: pointable.dipPosition,  radius: 6,  color: 'blue'},
              { position: pointable.pipPosition,  radius: 6,  color: 'blue'},
              { position: pointable.mcpPosition,  radius: 8,  color: 'green'},
              { position: pointable.carpPosition, radius: 6,  color: 'green'},
            ]
            return [
              ...positions.map((p, k) => (
                <mesh
                  key={`positions-${k}`}
                  position={new THREE.Vector3(...p.position)}
                  rotation={this.objectRotation}
                >
                  <circleGeometry radius={p.radius}/>
                  <meshBasicMaterial color={p.color}/>
                </mesh>
              )),
              ...pointable.bones.map((b, i) => (
                  <mesh
                    key={`bones-${i}`}
                    position={new THREE.Vector3(...b.center())}
                    rotation={this.objectRotation}
                  >
                    <boxGeometry width={5} height={5} depth={5}/>
                    <meshBasicMaterial color={'white'}/>
                  </mesh>
                )
              )
            ]
          })}
        </scene>
      </React3>
    )
  }
}

export default Canvas