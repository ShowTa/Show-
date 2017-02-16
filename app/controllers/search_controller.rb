class SearchController < ApplicationController
  def index
    word = params[:word]
    if word != ''
      @articles = Article.where("title LIKE ?", "%#{params[:word]}%")
    else
      @articles = Article.publishd
    end
  end
end
