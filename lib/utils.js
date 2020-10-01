import axios from 'axios';

const loadShowMore = disqusContent => {
  if (disqusContent !== null) {
    //console.log('this is working!');
    const interval = setInterval(function () {
      const disqusHeight = disqusContent.clientHeight;

      //console.log(disqusHeight);

      if (disqusHeight > 100) {
        document
          .querySelector('#comments-area')
          .classList.add('comments--loaded');
        clearInterval(interval);
      }
    }, 100);

    document
      .querySelector('#comments-overlay, #comments-show')
      .addEventListener('click', e => {
        const commentsArea = document.querySelector('#comments-area');
        commentsArea.classList.remove('comments--loaded');
        commentsArea.classList.add('comments--opened');
        e.preventDefault();
      });
  }
};

export const CommentsLoader = () => {
  let disqusContent = document.querySelector('#disqus_thread');

  //console.log('found something: ' + disqusContent);

  if (disqusContent !== null) {
    loadShowMore(disqusContent);
  } else {
    setTimeout(() => {
      disqusContent = document.querySelector('#disqus_thread');
      if (disqusContent !== null) {
        loadShowMore(disqusContent);
      }
    }, 1000);
  }
};

const scriptLoader = (url, callback = null) => {
  const d = document;
  const s = d.createElement('script');

  s.src = url;

  if (callback) {
    s.onload = callback;
  }

  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
};

export const DisqusLoader = (url, identifier) => {
  // eslint-disable-next-line
  const disqus_config = function () {
    this.page.url = `https://robkendal.co.uk/${url}`;
    this.page.identifier = identifier;
  };

  scriptLoader('https://robkendal.disqus.com/embed.js');
};

export const Config = {
  baseSiteUrl: process.env.BASE_URL
};

export const CalendlyLoader = divId => {
  //          <script src="https://assets.calendly.com/assets/external/widget.js"></script>
  const parentElement = document.getElementById(divId);
  scriptLoader('https://assets.calendly.com/assets/external/widget.js', () => {
    Calendly.initInlineWidget({
      url: 'https://calendly.com/robkendal??hide_landing_page_details=1',
      parentElement: parentElement,
      prefill: {},
      utm: {}
    });
  });

  function isCalendlyEvent(e) {
    return e.data.event && e.data.event.indexOf('calendly') === 0;
  }

  window.addEventListener('message', function (e) {
    if (isCalendlyEvent(e)) {
      if (e.data.event === 'calendly.event_type_viewed') {
        parentElement.classList.add('calendarview');
      }
      if (e.data.event === 'calendly.profile_page_viewed') {
        parentElement.classList.remove('calendarview');
      }
    }
  });
};

export const loadWebmentions = async url => {
  const response = await axios.get(
    `https://webmention.io/api/mentions.jf2?target=${url}/`
  );

  return response.data;
};
