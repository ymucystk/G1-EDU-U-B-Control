"use client";
import * as React from 'react'
import "./controller.css";

export default function Controller(props) {
  const {body_rotate, crotch_rotate} = props
  const {r1_rotate, r2_rotate, r3_rotate, r4_rotate, r5_rotate, r6_rotate, r7_rotate, r8_rotate, r9_rotate} = props
  const {l1_rotate, l2_rotate, l3_rotate, l4_rotate, l5_rotate, l6_rotate, l7_rotate, l8_rotate, l9_rotate} = props
  const {legR1_rotate, legR21_rotate, legR22_rotate, legR3_rotate, legR4_rotate} = props
  const {legL1_rotate, legL21_rotate, legL22_rotate, legL3_rotate, legL4_rotate} = props
  const {c_pos_x, c_pos_y, c_pos_z} = props
  const {c_deg_x, c_deg_y, c_deg_z} = props
  
  const set_robotName = (e)=>{
    props.set_robotName(e.target.value)
  }

  const set_body_rotate = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_body_rotate(value)
  }

  const set_crotch_rotate = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_crotch_rotate(value)
  }

  const set_r1_rotate = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_r1_rotate(value)
  }

  const set_r2_rotate = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_r2_rotate(value)
  }

  const set_r3_rotate = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_r3_rotate(value)
  }

  const set_r4_rotate = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_r4_rotate(value)
  }

  const set_r5_rotate = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_r5_rotate(value)
  }

  const set_r6_rotate = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_r6_rotate(value)
  }

  const set_r7_rotate = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_r7_rotate(value)
  }

  const set_r8_rotate = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_r8_rotate(value)
  }

  const set_r9_rotate = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_r9_rotate(value)
  }

  const set_l1_rotate = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_l1_rotate(value)
  }

  const set_l2_rotate = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_l2_rotate(value)
  }

  const set_l3_rotate = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_l3_rotate(value)
  }

  const set_l4_rotate = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_l4_rotate(value)
  }

  const set_l5_rotate = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_l5_rotate(value)
  }

  const set_l6_rotate = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_l6_rotate(value)
  }

  const set_l7_rotate = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_l7_rotate(value)
  }

  const set_l8_rotate = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_l8_rotate(value)
  }

  const set_l9_rotate = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_l9_rotate(value)
  }

  const set_legR1_rotate = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_legR1_rotate(value)
  }

  const set_legR21_rotate = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_legR21_rotate(value)
  }

  const set_legR22_rotate = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_legR22_rotate(value)
  }

  const set_legR3_rotate = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_legR3_rotate(value)
  }

  const set_legR4_rotate = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_legR4_rotate(value)
  }

  const set_legL1_rotate = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_legL1_rotate(value)
  }

  const set_legL21_rotate = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_legL21_rotate(value)
  }

  const set_legL22_rotate = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_legL22_rotate(value)
  }

  const set_legL3_rotate = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_legL3_rotate(value)
  }

  const set_legL4_rotate = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    if(Math.abs(value)===180){
      value = value * -1
    }
    props.set_legL4_rotate(value)
  }

  const set_c_pos_x = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    props.set_c_pos_x(value)
  }

  const set_c_pos_y = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    props.set_c_pos_y(value)
  }

  const set_c_pos_z = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    props.set_c_pos_z(value)
  }

  const set_c_deg_x = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    props.set_c_deg_x(value)
  }

  const set_c_deg_y = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    props.set_c_deg_y(value)
  }

  const set_c_deg_z = (e)=>{
    let value = Number.parseFloat(e.target.value || 0)
    props.set_c_deg_z(value)
  }

  return (
    <>
      <div className="controller1" >
        <div className="row mb-2">
          <div className="col-md-4"><label htmlFor="body_rotate_number" className="form-label"><span className="form-control-plaintext">body</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="body_rotate_number" value={body_rotate} onChange={set_body_rotate} min={-180} max={180}/></div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4"><label htmlFor="r1_rotate_number" className="form-label"><span className="form-control-plaintext">R1</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="r1_rotate_number" value={r1_rotate} onChange={set_r1_rotate} min={-180} max={180}/></div>
          <div className="col-md-4"><label htmlFor="r2_rotate_number" className="form-label"><span className="form-control-plaintext">R2</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="r2_rotate_number" value={r2_rotate} onChange={set_r2_rotate} min={-180} max={180}/></div>
          <div className="col-md-4"><label htmlFor="r3_rotate_number" className="form-label"><span className="form-control-plaintext">R3</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="r3_rotate_number" value={r3_rotate} onChange={set_r3_rotate} min={-180} max={180}/></div>
          <div className="col-md-4"><label htmlFor="r4_rotate_number" className="form-label"><span className="form-control-plaintext">R4</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="r4_rotate_number" value={r4_rotate} onChange={set_r4_rotate} min={-180} max={180}/></div>
          <div className="col-md-4"><label htmlFor="r5_rotate_number" className="form-label"><span className="form-control-plaintext">R5</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="r5_rotate_number" value={r5_rotate} onChange={set_r5_rotate} min={-180} max={180}/></div>
          <div className="col-md-4"><label htmlFor="r6_rotate_number" className="form-label"><span className="form-control-plaintext">R6</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="r6_rotate_number" value={r6_rotate} onChange={set_r6_rotate} min={-180} max={180}/></div>
          <div className="col-md-4"><label htmlFor="r7_rotate_number" className="form-label"><span className="form-control-plaintext">R7</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="r7_rotate_number" value={r7_rotate} onChange={set_r7_rotate} min={-180} max={180}/></div>
          <div className="col-md-4"><label htmlFor="r8_rotate_number" className="form-label"><span className="form-control-plaintext">R8</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="r8_rotate_number" value={r8_rotate} onChange={set_r8_rotate} min={-180} max={180}/></div>
          <div className="col-md-4"><label htmlFor="r9_rotate_number" className="form-label"><span className="form-control-plaintext">R9</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="r9_rotate_number" value={r9_rotate} onChange={set_r9_rotate} min={-180} max={180}/></div>
        </div>

        <div className="row mb-2">
          <div className="col-md-4"><label htmlFor="l1_rotate_number" className="form-label"><span className="form-control-plaintext">L1</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="l1_rotate_number" value={l1_rotate} onChange={set_l1_rotate} min={-180} max={180}/></div>
          <div className="col-md-4"><label htmlFor="l2_rotate_number" className="form-label"><span className="form-control-plaintext">L2</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="l2_rotate_number" value={l2_rotate} onChange={set_l2_rotate} min={-180} max={180}/></div>
          <div className="col-md-4"><label htmlFor="l3_rotate_number" className="form-label"><span className="form-control-plaintext">L3</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="l3_rotate_number" value={l3_rotate} onChange={set_l3_rotate} min={-180} max={180}/></div>
          <div className="col-md-4"><label htmlFor="l4_rotate_number" className="form-label"><span className="form-control-plaintext">L4</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="l4_rotate_number" value={l4_rotate} onChange={set_l4_rotate} min={-180} max={180}/></div>
          <div className="col-md-4"><label htmlFor="l5_rotate_number" className="form-label"><span className="form-control-plaintext">L5</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="l5_rotate_number" value={l5_rotate} onChange={set_l5_rotate} min={-180} max={180}/></div>
          <div className="col-md-4"><label htmlFor="l6_rotate_number" className="form-label"><span className="form-control-plaintext">L6</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="l6_rotate_number" value={l6_rotate} onChange={set_l6_rotate} min={-180} max={180}/></div>
          <div className="col-md-4"><label htmlFor="l7_rotate_number" className="form-label"><span className="form-control-plaintext">L7</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="l7_rotate_number" value={l7_rotate} onChange={set_l7_rotate} min={-180} max={180}/></div>
          <div className="col-md-4"><label htmlFor="l8_rotate_number" className="form-label"><span className="form-control-plaintext">L8</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="l8_rotate_number" value={l8_rotate} onChange={set_l8_rotate} min={-180} max={180}/></div>
          <div className="col-md-4"><label htmlFor="l9_rotate_number" className="form-label"><span className="form-control-plaintext">L9</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="l9_rotate_number" value={l9_rotate} onChange={set_l9_rotate} min={-180} max={180}/></div>
        </div>
      </div>
      <div className="controller2" >
        <div className="row mb-2">
          <div className="col-md-4"><label htmlFor="crotch_rotate_number" className="form-label"><span className="form-control-plaintext">crotch</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="crotch_rotate_number" value={crotch_rotate} onChange={set_crotch_rotate} min={-180} max={180}/></div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4"><label htmlFor="legR1_rotate_number" className="form-label"><span className="form-control-plaintext">leg R1</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="legR1_rotate_number" value={legR1_rotate} onChange={set_legR1_rotate} min={-180} max={180}/></div>
          <div className="col-md-4"><label htmlFor="legR21_rotate_number" className="form-label"><span className="form-control-plaintext">leg R2_1</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="legR21_rotate_number" value={legR21_rotate} onChange={set_legR21_rotate} min={-180} max={180}/></div>
          <div className="col-md-4"><label htmlFor="legR22_rotate_number" className="form-label"><span className="form-control-plaintext">leg R2_2</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="legR22_rotate_number" value={legR22_rotate} onChange={set_legR22_rotate} min={-180} max={180}/></div>
          <div className="col-md-4"><label htmlFor="legR3_rotate_number" className="form-label"><span className="form-control-plaintext">leg R3</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="legR3_rotate_number" value={legR3_rotate} onChange={set_legR3_rotate} min={-180} max={180}/></div>
          <div className="col-md-4"><label htmlFor="legR4_rotate_number" className="form-label"><span className="form-control-plaintext">leg R4</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="legR4_rotate_number" value={legR4_rotate} onChange={set_legR4_rotate} min={-180} max={180}/></div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4"><label htmlFor="legL1_rotate_number" className="form-label"><span className="form-control-plaintext">leg L1</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="legL1_rotate_number" value={legL1_rotate} onChange={set_legL1_rotate} min={-180} max={180}/></div>
          <div className="col-md-4"><label htmlFor="legL21_rotate_number" className="form-label"><span className="form-control-plaintext">leg L2_1</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="legL21_rotate_number" value={legL21_rotate} onChange={set_legL21_rotate} min={-180} max={180}/></div>
          <div className="col-md-4"><label htmlFor="legL22_rotate_number" className="form-label"><span className="form-control-plaintext">leg L2_2</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="legL22_rotate_number" value={legL22_rotate} onChange={set_legL22_rotate} min={-180} max={180}/></div>
          <div className="col-md-4"><label htmlFor="legL3_rotate_number" className="form-label"><span className="form-control-plaintext">leg L3</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="legL3_rotate_number" value={legL3_rotate} onChange={set_legL3_rotate} min={-180} max={180}/></div>
          <div className="col-md-4"><label htmlFor="legL4_rotate_number" className="form-label"><span className="form-control-plaintext">leg L4</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="legL4_rotate_number" value={legL4_rotate} onChange={set_legL4_rotate} min={-180} max={180}/></div>
        </div>

      </div>
      <div className="camera-controller" >
        <span>CAMERA</span>
        <div className="row mb-2">
          <div className="col-md-4"><label htmlFor="c_pos_x_number" className="form-label"><span className="form-control-plaintext">pos X</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="c_pos_x_number" value={c_pos_x} onChange={set_c_pos_x} step={0.01}/></div>
          <div className="col-md-4"><label htmlFor="c_pos_y_number" className="form-label"><span className="form-control-plaintext">pos Y</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="c_pos_y_number" value={c_pos_y} onChange={set_c_pos_y} step={0.01}/></div>
          <div className="col-md-4"><label htmlFor="c_pos_z_number" className="form-label"><span className="form-control-plaintext">pos Z</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="c_pos_z_number" value={c_pos_z} onChange={set_c_pos_z} step={0.01}/></div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4"><label htmlFor="c_deg_x_number" className="form-label"><span className="form-control-plaintext">deg X</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="c_deg_x_number" value={c_deg_x} onChange={set_c_deg_x} step={0.1}/></div>
          <div className="col-md-4"><label htmlFor="c_deg_y_number" className="form-label"><span className="form-control-plaintext">deg Y</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="c_deg_y_number" value={c_deg_y} onChange={set_c_deg_y} step={0.1}/></div>
          <div className="col-md-4"><label htmlFor="c_deg_z_number" className="form-label"><span className="form-control-plaintext">deg Z</span></label></div>
          <div className="col-md-8"><input type="number" className="form-control" id="c_deg_z_number" value={c_deg_z} onChange={set_c_deg_z} step={0.1}/></div>
        </div>
      </div>
    </>
    )
}
