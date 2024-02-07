let data = {
	meta: {
		totalPages: 13,
	},
	data: [
		{
			type: "articles",
			id: "3",
			attributes: {
				title: "JSON:API paints my bikeshed!",
				body: "The shortest article. Ever.",
				created: "2015-05-22T14:56:29.000Z",
				updated: "2015-05-22T14:56:28.000Z",
			},
		},
		{
			type: "articles",
			id: "3",
			attributes: {
				title: "JSON:API paints my bikeshed!",
				body: "The shortest article. Ever.",
				created: "2015-05-22T14:56:29.000Z",
				updated: "2015-05-22T14:56:28.000Z",
			},
		},
		{
			type: "articles",
			id: "3",
			attributes: {
				title: "JSON:API paints my bikeshed!",
				body: "The shortest article. Ever.",
				created: "2015-05-22T14:56:29.000Z",
				updated: "2015-05-22T14:56:28.000Z",
			},
		},
		{
			type: "articles",
			id: "3",
			attributes: {
				title: "JSON:API paints my bikeshed!",
				body: "The shortest article. Ever.",
				created: "2015-05-22T14:56:29.000Z",
				updated: "2015-05-22T14:56:28.000Z",
			},
		},
		{
			type: "articles",
			id: "3",
			attributes: {
				title: "JSON:API paints my bikeshed!",
				body: "The shortest article. Ever.",
				created: "2015-05-22T14:56:29.000Z",
				updated: "2015-05-22T14:56:28.000Z",
			},
		},
	],
	links: {
		self: "http://example.com/articles?page[number]=3&page[size]=1",
		first: "http://example.com/articles?page[number]=1&page[size]=1",
		prev: "http://example.com/articles?page[number]=2&page[size]=1",
		next: "http://example.com/articles?page[number]=4&page[size]=1",
		last: "http://example.com/articles?page[number]=13&page[size]=1",
	},
};
let LOfData=data['data'].length;
let LOfLink=data['links'].length;
 
// console.log ("totaظl pages is " + data['meta']['totalPages']);

// show self & first beside each other

// console.log(data['links']['self'] +"  **************     "+data['links']['first'] )

// check if totalPages is equal to data length

let totalPages= data['meta']['totalPages'];
if(totalPages===LOfData)
{  console.log("Total number of pages is equal to data lenght");
}
else{
  console.log("Total number of pages is not equal to data lenght") ;

}
   
// get the title of the data before the last one
// let preLastTitle = data['data'][LOfData - 2]['attributes']['title'];
// console.log('the title of the second last item in the list is '+preLastTitle);

// check if post id is less than 3 and type is articles
let idCheck = data['data'][0]['id'];
let typeCheck = data['data'][0]['type'];
if ((idCheck<3) && (typeCheck==='articles'))
{
    console.log ('The id and type are correct');}
    else{
       console.log('The id or type is incorrect')
   }
   console.log(Navigator.geolocation);