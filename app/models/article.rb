class Article < ApplicationRecord
  belongs_to :user

  enum status: { draft: 0, publishd: 1 }
end
