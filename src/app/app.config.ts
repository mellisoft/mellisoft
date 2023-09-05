import { environment } from "src/environments/environment"

export const API_BASEURL = environment.apiBaseUrl;
export const API_URL ={
    testImageUpload : API_BASEURL+'/test',
    postTest : API_BASEURL+'/test1',
}
export const DUMMY_FORM = [
    {
      type: "input",
      label: "Username",
      inputType: "text",
      name: "username",
      validations: [
        {
          name: "required",
          validator: "required",
          message: "Name Required"
        },
        {
          name: "pattern",
          validator: "^[a-zA-Z]+$",
          message: "Accept only text"
        }
      ]
    },
    // {
    //   type: "password",
    //   label: "Password",
    //   inputType: "text",
    //   name: "password",
    //   validations: [
    //     {
    //       name: "required",
    //       validator: "required",
    //       message: "Password Required"
    //     }
    //   ]
    // },{
    //   type: "select",
    //   label: "City",
    //   inputType: "select",
    //   name: "city",
    //   options:['A','B','C','D'],
    //   validations: [
    //     {
    //       name: "required",
    //       validator: "required",
    //       message: "City Required"
    //     }
    //   ]
    // },{
    //     type: "radio",
    //     label: "Gender",
    //     inputType: "radio",
    //     name: "gender",
    //     options:[
    //       {code:'M',label:'Male'},
    //       {code:'F',label:'Female'},
    //       {code:'O',label:'Other'},
    //   ],
    //     validations: [
    //       {
    //         name: "required",
    //         validator: "required",
    //         message: "Gender Required"
    //       }
    //     ]
    //   },{
    //     type: "textarea",
    //     label: "Description",
    //     inputType: "textarea",
    //     name: "description",
    //     validations: [
    //       {
    //         name: "required",
    //         validator: "required",
    //         message: "Description"
    //       }
    //     ]
    //   },{
    //     type: "date",
    //     label: "Date of Birth",
    //     inputType: "date",
    //     name: "dob",
    //     validations: [
    //       {
    //         name: "required",
    //         validator: "required",
    //         message: "Date of Birth"
    //       }
    //     ]
    //   },
      {
        type: "file",
        label: "Profile pic",
        inputType: "file",
        name: "imageUrl",
        multiple: false,
        accept:'image/*',
        maxSize:222216,
        validations: [
          {
            name: "required",
            validator: "required",
            message: "Profile pic Required"
          }
        ]
      }
    
  ]