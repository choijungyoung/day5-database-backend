import getPageStartEnd from "../../util/getPageStartEnd.mjs";
import {filmFindMany, filmFindOne} from "./model.mjs";


export const getAll = async(req,res)=>{
  const limit = req.query.limit || 10;
  const page = req.query.page || 1;
  const {pageStart, pageEnd} = getPageStartEnd(Number(limit), Number(page));

  try{
    const result = await filmFindMany(pageStart, pageEnd);
    if(!result) return res.status(404).json({error: "Not Found"});
    return res.status(200).json({data: result});
  } catch(err){
    return res.status(500).json({error:err.stack});
  }
}
export const getOne = async(req,res)=>{
  const id = Number(req.params.id);
  if(!id) return res.status(404).json({error: "Not Found"});

  try{
    const id = await filmFindOne(id);
    if(!result) return res.status(404).json({error: "Not Found"});
    return res.status(200).json({data: result});
  } catch(err){
    return res.status(500).json({error:err.stack});
  }
}