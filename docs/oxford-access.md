# Oxford-network-only access

The portfolio is a static GitHub Pages site. GitHub Pages itself does not provide source-IP access control for this setup, so **do not attempt to protect the site with browser JavaScript**. The restriction must happen before the request reaches GitHub Pages.

## Recommended architecture

`Visitor -> Cloudflare (Oxford IP allowlist) -> GitHub Pages -> cecigarcia.uk`

Keep the existing GitHub Pages custom-domain configuration, but ensure the `cecigarcia.uk` DNS record is proxied through Cloudflare (orange cloud). If the record is DNS-only, visitors can bypass Cloudflare and the allowlist will not protect the site.

## Oxford network ranges

As checked on 2 November 2026, the Trusted Introducer entry for the University of Oxford Computer Emergency Response Team (OxCERT) lists this constituency:

```text
129.67.0.0/16
163.1.0.0/16
192.76.6.0/23
192.76.8.0/21
192.76.16.0/20
192.76.32.0/22
2001:630:440::/44
```

Source: https://tf-csirt.org/trusted-introducer/directory/teams/oxcert-uk/

**Before enabling the rule, confirm the intended reviewer networks with Oxford Network Services / Information Security.** The public OxCERT constituency is a useful current reference, but a narrower requirement such as managed desktops/VPN only, or excluding guest/wireless networks, needs the authoritative Oxford sub-ranges rather than an assumption.

## Cloudflare configuration

Cloudflare recommends a WAF custom rule for an allowlist-only site:

1. Add the Oxford CIDRs above to a Cloudflare IP list named `oxford_networks`.
2. In **Security -> WAF -> Custom rules**, create a rule such as `Oxford network only`.
3. Use this expression:

```text
(http.host eq "cecigarcia.uk" and not ip.src in $oxford_networks)
```

4. Set the action to **Block**.
5. If `www.cecigarcia.uk` is also served, either redirect it before this rule or include it explicitly in the hostname condition.
6. Test from an Oxford-managed connection and from a non-Oxford connection before sharing the URL.

Cloudflare reference: https://developers.cloudflare.com/waf/custom-rules/use-cases/allow-traffic-from-ips-in-allowlist/

## Important limitations

- The `CeciG21/cg-website` repository is public. Blocking the rendered website does **not** make the repository source private.
- `robots.txt` and `noindex` metadata are included to discourage indexing; they are not security controls.
- Do not put private CV material, secrets, internal Oxford data, Azure DevOps data, API keys or private project source into this repository.
- If the portfolio itself must be confidential rather than merely network-restricted, use private hosting with authentication instead of relying on a public GitHub Pages repository.

## Verification checklist

- [ ] `cecigarcia.uk` is served by GitHub Pages.
- [ ] Cloudflare proxy is enabled for the public DNS path.
- [ ] Oxford ranges have been confirmed for the intended reviewers.
- [ ] The non-Oxford rule is set to Block.
- [ ] An Oxford-network test succeeds.
- [ ] A non-Oxford-network test receives a Cloudflare block response.
- [ ] The origin cannot be reached through an alternate public hostname you intend to keep private.
