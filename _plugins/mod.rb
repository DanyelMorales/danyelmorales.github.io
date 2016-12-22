require "jekyll-paginate/version"
require "jekyll-paginate/pager"
require "jekyll-paginate/pagination"

Pager = Jekyll::Paginate::Pager
Page = Jekyll::Page

module Jekyll
  module PaginateAlternative
	class PaginateAlternative < Jekyll::Paginate::Pagination
      
	   priority :highest
	  
		def generate(site)
			fakedPage = Jekyll::Page.new(site, site.source, '/ES/','index.html')
			site.pages << fakedPage
			paginate(site, fakedPage)
		end 
		
      def paginate(site, page)
		#all_posts = site.site_payload['site']['posts'].reject { |post| post['hidden'] }
		
		# Obteniendo el path relativo
		#print site.site_payload['site']['posts'][0].relative_path
		#print site.site_payload['site']['posts'][0].relative_path.match(/(.)es(.)/)
		
		all_posts = site.site_payload['site']['posts'].reject { |post| 
			post.relative_path.match(/(.)es(.)/) == nil
		}
		
		#site.site_payload['site']['posts'] = site.site_payload['site']['posts'] - all_posts

		#if site.site_payload['site']['posts'][0].relative_path.match(/(.)es(.)/) == nil
		#	return
		#end 
		
        pages = Pager.calculate_pages(all_posts, site.config['paginate'].to_i)
        (1..pages).each do |num_page|
          pager = Pager.new(site, num_page, all_posts, pages)
          if num_page > 1
            newpage = Page.new(site, site.source, page.dir, page.name)
            newpage.pager = pager
            newpage.dir = newpage.dir = "/ES/page#{num_page}"
            site.pages << newpage
          else
            page.pager = pager
          end
        end
      end
	  
	end 
  end
end