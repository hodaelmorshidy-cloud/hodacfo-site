(function () {
  document.addEventListener('submit', function (e) {
    var form = e.target;
    if (!form.classList.contains('ml-block-form')) return;
    e.preventDefault();

    var emailInput = form.querySelector('input[type="email"]');
    var email = emailInput ? emailInput.value.trim() : '';
    if (!email) return;

    var btn = form.querySelector('button[type="submit"]');
    var originalText = btn ? btn.textContent : '';
    if (btn) { btn.disabled = true; btn.textContent = 'Subscribing…'; }

    var action = form.getAttribute('action') || '';
    var match = action.match(/forms\/(\d+)\//);
    var formId = match ? match[1] : '189452274019337486';

    var url = 'https://assets.mailerlite.com/jsonp/2407636/forms/' + formId
      + '/subscribe?fields%5Bemail%5D=' + encodeURIComponent(email)
      + '&ml-submit=1&anticsrf=true';

    fetch(url, { mode: 'no-cors' })
      .then(function () {
        form.innerHTML = '<p style="font-weight:600;color:#0A1628;font-size:.9375rem;margin:0;padding:14px 0;">You\'re in. Check your inbox.</p>';
      })
      .catch(function () {
        if (btn) { btn.disabled = false; btn.textContent = originalText; }
        if (emailInput) emailInput.style.borderColor = '#C9A84C';
      });
  });
})();
