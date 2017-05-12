
export class TweetsService{

	getTweets(){
		return [
			{ 
            	imageUrl: "http://lorempixel.com/100/100/people?1",
            	author: "Aaditya",
            	handle: "@psychicgerm",
            	body: "COYG! #IAWT",
            	totalLikes: 2,
            	iLike: false
			},
			
			{ 
            	imageUrl: "http://lorempixel.com/100/100/people?2",
            	author: "Windward",
            	handle: "@windwardstudios",
            	body: "Looking for a better company reporting or docgen app?",
            	totalLikes: 1,
            	iLike: false
			},

			{ 
            	imageUrl: "http://lorempixel.com/100/100/people?3",
            	author: "Raji",
            	handle: "@rajisund",
            	body: "CALIFORNIA!!!",
            	totalLikes: 7,
            	iLike: false
			}

		];
	}
}