import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";

const Overlay = styled.div`
  position: fixed; top:0; left:0; width:100%; height:100%;
  background: rgba(0,0,0,0.6); display:flex; align-items:center; justify-content:center; z-index:1000;
`;

const ModalBox = styled.div`
  background:white; padding:20px; border-radius:10px; max-width:600px; width:100%; max-height:90vh; overflow-y:auto;
`;

const Title = styled.h2`margin-bottom:10px; color:green;`;
const Label = styled.label`font-weight:bold; display:block; margin-top:10px;`;
const Input = styled.input`width:100%; padding:8px; margin-top:5px; border-radius:5px; border:1px solid #ccc;`;
const TextArea = styled.textarea`width:100%; padding:8px; margin-top:5px; border-radius:5px; border:1px solid #ccc;`;
const ButtonRow = styled.div`display:flex; gap:10px; margin-top:20px;`;
const Button = styled.button`
  flex:1; padding:10px; border:none; border-radius:6px; color:#fff; cursor:pointer;
  background:${props=>props.cancel?'gray':'green'};
`;

export default function EditPublicationModal({ show, publication, onClose, onUpdated }) {
  const [form, setForm] = useState({
    title:'', name:'', email:'', phone:'', institution:'', authors:'', journal:'',
    volume:'', issue:'', doi:'', cover_letter:'', abstract:'', disclosures:''
  });
  const [file, setFile] = useState(null);

  useEffect(()=>{
    if(publication){
      setForm({
        title:publication.title||'',
        name:publication.name||'',
        email:publication.email||'',
        phone:publication.phone||'',
        institution:publication.institution||'',
        authors:publication.authors||'',
        journal:publication.journal||'',
        volume:publication.volume||'',
        issue:publication.issue||'',
        doi:publication.doi||'',
        cover_letter:publication.cover_letter||'',
        abstract:publication.abstract||'',
        disclosures:publication.disclosures||''
      });
    }
  },[publication]);

  if(!show) return null;

  const handleChange = e=>setForm({...form,[e.target.name]:e.target.value});

  const handleFileChange = e=>{
    const selected = e.target.files[0];
    if(!selected) return;
    if(selected.type!=='application/pdf'){
      Swal.fire('Invalid File','Only PDF files are allowed','error'); e.target.value=''; return;
    }
    const MAX_SIZE = 10*1024*1024;
    if(selected.size>MAX_SIZE){
      Swal.fire('Too Large','Max 10MB','error'); e.target.value=''; return;
    }
    setFile(selected);
  }

  const handleSubmit = async ()=>{
    Swal.fire({title:'Updating...', allowOutsideClick:false, didOpen:()=>Swal.showLoading()});
    try{
      const formData = new FormData();
      formData.append('id',publication.id);
      Object.keys(form).forEach(k=>formData.append(k,form[k]));
      if(file) formData.append('pdf_file',file);

      const res = await fetch('https://nisebnigeria.com/api_niseb/update_publication.php',{
        method:'POST',
        body: formData
      });
      const data = await res.json();
      Swal.close();
      if(data.success){
        Swal.fire('Updated!',data.message,'success');
        onUpdated();
        onClose();
      } else {
        Swal.fire('Error!',data.message,'error');
      }
    }catch(err){
      Swal.close();
      Swal.fire('Error!','Network error','error');
    }
  }

  return(
    <Overlay>
      <ModalBox>
        <Title>Edit Publication</Title>

        <Label>Author Name</Label>
        <Input name="name" value={form.name} onChange={handleChange}/>

        <Label>Email</Label>
        <Input name="email" value={form.email} onChange={handleChange}/>

        <Label>Phone</Label>
        <Input name="phone" value={form.phone} onChange={handleChange}/>

        <Label>Institution</Label>
        <Input name="institution" value={form.institution} onChange={handleChange}/>

        <Label>Title</Label>
        <Input name="title" value={form.title} onChange={handleChange}/>

        <Label>Authors</Label>
        <Input name="authors" value={form.authors} onChange={handleChange}/>

        <Label>Journal</Label>
        <Input name="journal" value={form.journal} onChange={handleChange}/>

        <Label>Volume</Label>
        <Input name="volume" value={form.volume} onChange={handleChange}/>

        <Label>Issue</Label>
        <Input name="issue" value={form.issue} onChange={handleChange}/>

        <Label>DOI</Label>
        <Input name="doi" value={form.doi} onChange={handleChange}/>

        <Label>Cover Letter</Label>
        <TextArea name="cover_letter" value={form.cover_letter} onChange={handleChange}/>

        <Label>Abstract</Label>
        <TextArea name="abstract" value={form.abstract} onChange={handleChange}/>

        <Label>Disclosures</Label>
        <TextArea name="disclosures" value={form.disclosures} onChange={handleChange}/>

        <Label>Upload New PDF (optional)</Label>
        <Input type="file" accept="application/pdf" onChange={handleFileChange}/>

        <ButtonRow>
          <Button cancel onClick={()=>onClose()}>Cancel</Button>
          <Button onClick={handleSubmit}>Update</Button>
        </ButtonRow>
      </ModalBox>
    </Overlay>
  )
}