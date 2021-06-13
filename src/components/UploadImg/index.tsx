import React, { useState } from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { getToken } from '../../services/auth';
import axios from 'axios';
import { UploadFile } from 'antd/lib/upload/interface';

interface UploadImgProps {
  images: any[];
  id: string | number;
}

type UploadFileProps = UploadFile & {
  uuid: string | number;
}

const UploadImg = ({ images, id }: UploadImgProps) => {
  const [fileList, setFileList] = useState(images || []);

  return (
    <Upload
      action={`https://vitrinniapi.herokuapp.com/api/projects/${id}/saveimage`}
      name="image"
      headers={{ 'Authorization': 'Bearer' + getToken() }}
      listType="picture"
      defaultFileList={[...fileList]}
      className="upload-list-inline"
      onRemove={({ uuid }: UploadFileProps) => {
        axios.post(`https://vitrinniapi.herokuapp.com/api/projects/deleteimage/${uuid}`, {}, {
          headers: {
            "Authorization": 'Bearer' + getToken()
          }
        })
      }}
    >
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
  );
};

export default UploadImg