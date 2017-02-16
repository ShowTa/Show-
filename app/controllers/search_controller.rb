class SearchController < ApplicationController
  def index
    word = params[:word]
    @articles = Article.where("title LIKE ?", "%#{params[:word]}%")
  end
end
