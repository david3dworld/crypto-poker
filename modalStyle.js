const modalStyle = (theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:'#1d1d1d',
    overFlow:'auto'
  },
  modal_logo:{
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '150px',
    marginTop: '30px'
  },
  modal_paper: {
    maxHeight:'100%',
    overflow:'auto',
    minWidth: "350px",
    width: "60%",
    backgroundColor: 'white',
    color:'#1d1d1d',
    border: "1px solid #ad6f03",
    borderRadius: "0 0 14px 14px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    '& *':{
      color:'#1d1d1d',
    },
    '& button *':{
      color:'white',
    }
  },

  modal_address:{
  padding: '10px',
  boxShadow:'0 2px 5px 0 rgb(0 0 0 / 26%)'
  },
  small_modal_paper:{
    maxHeight:'100%',
    overflow:'auto',
    backgroundColor: 'white',
    color:'#1d1d1d',
    border: "1px solid #ad6f03",
    borderRadius: "0 0 14px 14px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    '& *':{
      color:'#1d1d1d',
    },
    '& button *':{
      color:'white',
    },
    minWidth: "320px",
    width: "35%",
  },
  modal_title: {
    marginTop: '-16px',
    marginLeft: '-32px',
    marginRight: '-32px',
    padding: '5px 10px',
    background: '#ad6f03',
    color:'white',
  },
  modal_body:{
    padding: theme.spacing(1, 3, 2),
    overflow:'auto',
  },
  modal_close:{
    float:'right',
    margin:'-5px 0',
    color:'white',
    '& *':{
      color:'white',
    }
  },
  modal_label:{
    textAlign:'right',
    alignSelf: 'flex-end',
    fontWeight:'600'
  },

  modal_field:{
    textAlign:'left',
    fontWeight:'100',
    overflow:'auto'
  },
  modal_select:{
    color:'#1d1d1d',
    fontSize:'12px',
    '& *':{
      color:'#1d1d1d',
    }
  },
  modal_select_item:{
    color:'#1d1d1d',
    fontSize:'12px'
  },
  modal_slider:{
    '& *':{
      color:'goldenrod'
    },
    '& .MuiSlider-valueLabel *':{
      color:'white',
      backgroundColor:'goldenrod'
    }
  },
  modal_checkbox:{
    color:'goldenrod',
    '& *':{
      color:'goldenrod'
    },
  },
  modal_center:{
    marginLeft:'auto',
    marginRight:'auto',
    flexFlow: "row wrap",
    justifyContent: "space-between",
    display: "flex",
    alignItems: 'center'
  },
  tableContainer: {
    marginLeft:'auto',
    marginRight:'auto',
    width:'60%',
    height:'200px',
    overflow:'auto'
  },
  sliderInput: {
    fontSize:'0.7rem'
  }
});

export default modalStyle;
