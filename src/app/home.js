"use client";
import 'aframe'
import * as React from 'react'
const THREE = window.AFRAME.THREE; // これで　AFRAME と　THREEを同時に使える
import Controller from './controller.js'

const joint_pos = {
  waist:{x:0,y:0,z:0},
  body:{x:0,y:0.025,z:0},
  right_1:{x:-0.052,y:0.268,z:0.000835},
  right_2:{x:-0.087,y:0.011,z:0},
  right_3:{x:-0.0064,y:-0.183,z:0},
  right_4:{x:-0.002,y:0,z:0.0155},
  right_5:{x:0,y:-0.010265,z:0.10397},
  right_6:{x:0,y:0,z:0.04},
  right_7:{x:0,y:0,z:0.048},
  right_8:{x:0,y:-0.002,z:0.0409},
  right_9:{x:0,y:0,z:0.097},
  left_1:{x:0.052,y:0.268,z:0.000835},
  left_2:{x:0.087,y:0.011,z:0},
  left_3:{x:0.0064,y:-0.183,z:0},
  left_4:{x:0.002,y:0,z:0.0155},
  left_5:{x:0,y:-0.010265,z:0.10397},
  left_6:{x:0,y:0,z:0.04},
  left_7:{x:0,y:0,z:0.048},
  left_8:{x:0,y:-0.002,z:0.0409},
  left_9:{x:0,y:0,z:0.097},
}

let registered = false
const x_vec_base = new THREE.Vector3(1,0,0).normalize()
const y_vec_base = new THREE.Vector3(0,1,0).normalize()
const z_vec_base = new THREE.Vector3(0,0,1).normalize()

const object3D_map = {}
const rotate_table = {}
const rotvec_table = {
  waist:y_vec_base,
  body:y_vec_base,
  right_1:new THREE.Vector3(-1,0.28674538575881,0).normalize(),
  right_2:z_vec_base,
  right_3:y_vec_base,
  right_4:x_vec_base,
  right_5:z_vec_base,
  right_6:y_vec_base,
  right_7:x_vec_base,
  right_8:z_vec_base,
  right_9:x_vec_base,
  left_1:new THREE.Vector3(1,0.28674538575881,0).normalize(),
  left_2:z_vec_base,
  left_3:y_vec_base,
  left_4:x_vec_base,
  left_5:z_vec_base,
  left_6:y_vec_base,
  left_7:x_vec_base,
  left_8:z_vec_base,
  left_9:x_vec_base,
}
let target_move_distance = 0
const target_move_speed = (1000 / 0.5)
const max_move_unit = {
  waist:(1/180),
  body:(1/180),
  right_1:(1/180),
  right_2:(1/180),
  right_3:(1/180),
  right_4:(1/180),
  right_5:(1/180),
  right_6:(1/180),
  right_7:(1/180),
  right_8:(1/180),
  right_9:(1/180),
  left_1:(1/180),
  left_2:(1/180),
  left_3:(1/180),
  left_4:(1/180),
  left_5:(1/180),
  left_6:(1/180),
  left_7:(1/180),
  left_8:(1/180),
  left_9:(1/180),
}

function useRefState(initialValue=undefined,updateFunc=undefined) {
  const ref = React.useRef(initialValue);
  const prev_ref = React.useRef(initialValue);
  function setValue(arg){
    prev_ref.current = ref.current
    if (typeof arg === 'function') {
      ref.current = arg(value)
    }else{
      ref.current = arg
    }
    if(updateFunc){
      updateFunc((v)=>v=v+1)
    }
  }
  return [ref.current, setValue, ref, prev_ref.current];
}

export default function Home(props) {
  const [update, set_update] = React.useState(0)
  const [rendered,set_rendered] = useRefState(false)
  const [body_rotate,set_body_rotate] = useRefState(0)
  const [r1_rotate,set_r1_rotate] = useRefState(0)
  const [r2_rotate,set_r2_rotate] = useRefState(-170)
  const [r3_rotate,set_r3_rotate] = useRefState(0)
  const [r4_rotate,set_r4_rotate] = useRefState(90)
  const [r5_rotate,set_r5_rotate] = useRefState(0)
  const [r6_rotate,set_r6_rotate] = useRefState(0)
  const [r7_rotate,set_r7_rotate] = useRefState(0)
  const [r8_rotate,set_r8_rotate] = useRefState(0)
  const [r9_rotate,set_r9_rotate] = useRefState(0)
  const [l1_rotate,set_l1_rotate] = useRefState(0)
  const [l2_rotate,set_l2_rotate] = useRefState(170)
  const [l3_rotate,set_l3_rotate] = useRefState(0)
  const [l4_rotate,set_l4_rotate] = useRefState(90)
  const [l5_rotate,set_l5_rotate] = useRefState(0)
  const [l6_rotate,set_l6_rotate] = useRefState(0)
  const [l7_rotate,set_l7_rotate] = useRefState(0)
  const [l8_rotate,set_l8_rotate] = useRefState(0)
  const [l9_rotate,set_l9_rotate] = useRefState(0)
  const [c_pos_x,set_c_pos_x] = useRefState(0)
  const [c_pos_y,set_c_pos_y] = useRefState(0.35)
  const [c_pos_z,set_c_pos_z] = useRefState(0.8)
  const [c_deg_x,set_c_deg_x] = useRefState(0)
  const [c_deg_y,set_c_deg_y] = useRefState(0)
  const [c_deg_z,set_c_deg_z] = useRefState(0)

  React.useEffect(() => {
    const joint_keys = Object.keys(rotate_table)
    const key_num = joint_keys.length
    for (let i = 0; i < key_num; i = i + 1) {
      const key = joint_keys[i]
      const current_object3D = object3D_map[key]
      if (current_object3D !== undefined) {
        const current_data = rotate_table[key]
        if (current_data.first) {
          current_data.first = false
          current_data.starttime = performance.now()
          current_data.start_quaternion = current_object3D.quaternion.clone()
          current_data.end_quaternion = new THREE.Quaternion().setFromAxisAngle(rotvec_table[key], toRadian(current_data.rot))
          const move_time_1 = target_move_distance * target_move_speed
          const wk_euler = new THREE.Quaternion().angleTo(
            current_data.start_quaternion.clone().invert().multiply(current_data.end_quaternion))
          const move_time_2 = (toAngle(wk_euler) * max_move_unit[key]) * 1000
          current_data.move_time = Math.max(move_time_1, move_time_2)
          current_data.endtime = current_data.starttime + current_data.move_time
        }
        const current_time = performance.now()
        if (current_time < current_data.endtime) {
          const elapsed_time = current_time - current_data.starttime
          current_object3D.quaternion.slerpQuaternions(
            current_data.start_quaternion, current_data.end_quaternion, (elapsed_time / current_data.move_time))
        }else{
          current_object3D.quaternion.copy(current_data.end_quaternion)
          delete rotate_table[key]
        }
      }
    }
  },[update])
 
  React.useEffect(() => {
    rotate_table.body = { rot: body_rotate, first: true }
  },[body_rotate])

  React.useEffect(() => {
    rotate_table.right_1 = { rot: r1_rotate, first: true }
  },[r1_rotate])

  React.useEffect(() => {
    rotate_table.right_2 = { rot: r2_rotate, first: true }
  },[r2_rotate])

  React.useEffect(() => {
    rotate_table.right_3 = { rot: r3_rotate, first: true }
  },[r3_rotate])

  React.useEffect(() => {
    rotate_table.right_4 = { rot: r4_rotate, first: true }
  },[r4_rotate])

  React.useEffect(() => {
    rotate_table.right_5 = { rot: r5_rotate, first: true }
  },[r5_rotate])

  React.useEffect(() => {
    rotate_table.right_6 = { rot: r6_rotate, first: true }
  },[r6_rotate])

  React.useEffect(() => {
    rotate_table.right_7 = { rot: r7_rotate, first: true }
  },[r7_rotate])

  React.useEffect(() => {
    rotate_table.right_8 = { rot: r8_rotate, first: true }
  },[r8_rotate])

  React.useEffect(() => {
    rotate_table.right_9 = { rot: r9_rotate, first: true }
  },[r9_rotate])

  React.useEffect(() => {
    rotate_table.left_1 = { rot: l1_rotate, first: true }
  },[l1_rotate])

  React.useEffect(() => {
    rotate_table.left_2 = { rot: l2_rotate, first: true }
  },[l2_rotate])

  React.useEffect(() => {
    rotate_table.left_3 = { rot: l3_rotate, first: true }
  },[l3_rotate])

  React.useEffect(() => {
    rotate_table.left_4 = { rot: l4_rotate, first: true }
  },[l4_rotate])

  React.useEffect(() => {
    rotate_table.left_5 = { rot: l5_rotate, first: true }
  },[l5_rotate])

  React.useEffect(() => {
    rotate_table.left_6 = { rot: l6_rotate, first: true }
  },[l6_rotate])

  React.useEffect(() => {
    rotate_table.left_7 = { rot: l7_rotate, first: true }
  },[l7_rotate])

  React.useEffect(() => {
    rotate_table.left_8 = { rot: l8_rotate, first: true }
  },[l8_rotate])

  React.useEffect(() => {
    rotate_table.left_9 = { rot: l9_rotate, first: true }
  },[l9_rotate])

  React.useEffect(() => {
    if(!registered){
      registered = true
      set_rendered(true)
      console.log('set_rendered')
      set_update((v)=>v=v+1)

      AFRAME.registerComponent('obj-id', {
        schema: {type: 'string', default: ''},
        init: function () {
          if(Object.hasOwn(object3D_map,this.data)){
            object3D_map[this.data] = this.el.object3D
            const wk = joint_pos[this.data]
            this.el.object3D.position.set(wk.x, wk.y, wk.z)
          }else{
            object3D_map[this.data] = this.el.object3D
            const wk = joint_pos[this.data]
            this.el.object3D.position.set(wk.x, wk.y, wk.z)
          }
        },
        remove: function () {
          if(Object.hasOwn(object3D_map,this.data)){
            object3D_map[this.data] = this.el.object3D
            const wk = joint_pos[this.data]
            this.el.object3D.position.set(wk.x, wk.y, wk.z)
          }else{
            object3D_map[this.data] = this.el.object3D
            const wk = joint_pos[this.data]
            this.el.object3D.position.set(wk.x, wk.y, wk.z)
          }
        },
        tick: function (t) {
          set_update((v)=>v=v+1)
        }
      });

      AFRAME.registerComponent('scene', {
        schema: { type: 'string', default: '' },
        init: function () {
          console.log('scene init')
        }
      });
    }
  },[])

  const controllerProps = {
    body_rotate,set_body_rotate,
    r1_rotate,set_r1_rotate,r2_rotate,set_r2_rotate,r3_rotate,set_r3_rotate,
    r4_rotate,set_r4_rotate,r5_rotate,set_r5_rotate,r6_rotate,set_r6_rotate,
    r7_rotate,set_r7_rotate,r8_rotate,set_r8_rotate,r9_rotate,set_r9_rotate,
    l1_rotate,set_l1_rotate,l2_rotate,set_l2_rotate,l3_rotate,set_l3_rotate,
    l4_rotate,set_l4_rotate,l5_rotate,set_l5_rotate,l6_rotate,set_l6_rotate,
    l7_rotate,set_l7_rotate,l8_rotate,set_l8_rotate,l9_rotate,set_l9_rotate,
    c_pos_x,set_c_pos_x,c_pos_y,set_c_pos_y,c_pos_z,set_c_pos_z,
    c_deg_x,set_c_deg_x,c_deg_y,set_c_deg_y,c_deg_z,set_c_deg_z
  }

  const robotProps = { visible:true }

  if(rendered){
    return (
    <>
      <a-scene scene>
        <a-plane position="0 0 0" rotation="-90 0 0" width="10" height="10" color="#7BC8A4" shadow></a-plane>
        <Assets/>
        <Robot_data {...robotProps}/>
        <a-entity light="type: directional; color: #FFF; intensity: 0.25" position="1 1 1"></a-entity>
        <a-entity light="type: directional; color: #FFF; intensity: 0.25" position="-1 1 1"></a-entity>
        <a-entity light="type: directional; color: #EEE; intensity: 0.25" position="-1 1 -1"></a-entity>
        <a-entity light="type: directional; color: #FFF; intensity: 0.25" position="1 1 -1"></a-entity>
        <a-entity light="type: directional; color: #EFE; intensity: 0.05" position="0 -1 0"></a-entity>
        <a-entity id="rig" position={`${c_pos_x} ${c_pos_y} ${c_pos_z}`} rotation={`${c_deg_x} ${c_deg_y} ${c_deg_z}`}>
          <a-camera id="camera" cursor="rayOrigin: mouse;" position="0 0 0" look-controls-enabled="false" wasd-controls-enabled="false"></a-camera>
        </a-entity>
      </a-scene>
      <Controller {...controllerProps}/>
    </>
    );
  }else{
    return(
      <a-scene>
        <Assets/>
      </a-scene>
    )
  }
}

const Assets = ()=>{
  return (
    <a-assets>
      {/*MODEL*/}
      <a-asset-items id="waist" src="G1-EDU_Ultimate_B_waist.gltf" ></a-asset-items>
      <a-asset-items id="body" src="G1-EDU_Ultimate_B_head_body.gltf" ></a-asset-items>
      <a-asset-items id="right_1" src="G1-EDU_Ultimate_B_right_1.gltf" ></a-asset-items>
      <a-asset-items id="right_2" src="G1-EDU_Ultimate_B_right_2.gltf" ></a-asset-items>
      <a-asset-items id="right_3" src="G1-EDU_Ultimate_B_right_3.gltf" ></a-asset-items>
      <a-asset-items id="right_4" src="G1-EDU_Ultimate_B_right_4.gltf" ></a-asset-items>
      <a-asset-items id="right_5" src="G1-EDU_Ultimate_B_right_5.gltf" ></a-asset-items>
      <a-asset-items id="right_6" src="G1-EDU_Ultimate_B_right_6.gltf" ></a-asset-items>
      <a-asset-items id="right_7" src="G1-EDU_Ultimate_B_right_7.gltf" ></a-asset-items>
      <a-asset-items id="right_8" src="G1-EDU_Ultimate_B_right_8.gltf" ></a-asset-items>
      <a-asset-items id="right_9" src="G1-EDU_Ultimate_B_right_9.gltf" ></a-asset-items>
      <a-asset-items id="left_1" src="G1-EDU_Ultimate_B_left_1.gltf" ></a-asset-items>
      <a-asset-items id="left_2" src="G1-EDU_Ultimate_B_left_2.gltf" ></a-asset-items>
      <a-asset-items id="left_3" src="G1-EDU_Ultimate_B_left_3.gltf" ></a-asset-items>
      <a-asset-items id="left_4" src="G1-EDU_Ultimate_B_left_4.gltf" ></a-asset-items>
      <a-asset-items id="left_5" src="G1-EDU_Ultimate_B_left_5.gltf" ></a-asset-items>
      <a-asset-items id="left_6" src="G1-EDU_Ultimate_B_left_6.gltf" ></a-asset-items>
      <a-asset-items id="left_7" src="G1-EDU_Ultimate_B_left_7.gltf" ></a-asset-items>
      <a-asset-items id="left_8" src="G1-EDU_Ultimate_B_left_8.gltf" ></a-asset-items>
      <a-asset-items id="left_9" src="G1-EDU_Ultimate_B_left_9.gltf" ></a-asset-items>
    </a-assets>
  )
}

const Robot_data = (props)=>{
  const {visible=true} = props
  return (<>{visible?
    <a-entity gltf-model="#waist" obj-id="waist" rotation={`0 0 0`}>
      <a-entity gltf-model="#body" obj-id="body">
        <a-entity gltf-model="#right_1" obj-id="right_1">
          <a-entity gltf-model="#right_2" obj-id="right_2">
            <a-entity gltf-model="#right_3" obj-id="right_3">
              <a-entity gltf-model="#right_4" obj-id="right_4">
                <a-entity gltf-model="#right_5" obj-id="right_5">
                  <a-entity gltf-model="#right_6" obj-id="right_6">
                    <a-entity gltf-model="#right_7" obj-id="right_7">
                      <a-entity gltf-model="#right_8" obj-id="right_8">
                        <a-entity gltf-model="#right_9" obj-id="right_9"></a-entity>
                      </a-entity>
                    </a-entity>
                  </a-entity>
                </a-entity>
              </a-entity>
            </a-entity>
          </a-entity>
        </a-entity>
        <a-entity gltf-model="#left_1" obj-id="left_1">
          <a-entity gltf-model="#left_2" obj-id="left_2">
            <a-entity gltf-model="#left_3" obj-id="left_3">
              <a-entity gltf-model="#left_4" obj-id="left_4">
                <a-entity gltf-model="#left_5" obj-id="left_5">
                  <a-entity gltf-model="#left_6" obj-id="left_6">
                    <a-entity gltf-model="#left_7" obj-id="left_7">
                      <a-entity gltf-model="#left_8" obj-id="left_8">
                        <a-entity gltf-model="#left_9" obj-id="left_9"></a-entity>
                      </a-entity>
                    </a-entity>
                  </a-entity>
                </a-entity>
              </a-entity>
            </a-entity>
          </a-entity>
        </a-entity>
      </a-entity>
    </a-entity>:null}</>
  )
}

const normalize180 = (angle)=>{
  if(Math.abs(angle) === 180){
    return angle
  }
  return ((angle + 180) % 360 + 360) % 360 - 180
}
const toAngle = (radian)=>{
  return normalize180(radian*(180/Math.PI))
}
const toRadian = (angle)=>{
  return normalize180(angle)*(Math.PI/180)
}
